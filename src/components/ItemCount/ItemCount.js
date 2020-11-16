import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';


const ItemCount = ({initial, min, max, onAdd}) => {




  const [count, setCount] = useState(initial)
  
  
  //INCREMENTO, DECREMENTO Y RESETEO

const increment = () => {
 if (count < max)  
 {
   setCount(count+1) 
   onAdd(count+1);

}
}
const decrement = () => {
  
 if (count > min){
   setCount(count - 1)
   onAdd(count - 1);
 }

}

const reset = () => {
  setCount(initial)
}




let sinProd = `Aqui puedes comprar`;
let conProd = `Estas comprando ${count} prendas`;


   return (<>
     <div className="d-flex align-content-center justify-content-center form-group container">
    <Form>

     <h3 className="my-2 text-center">{count===0 ? sinProd : conProd}</h3>
  
    <FormControl type="text" value={count}  /> 
    
    <Button onClick={increment} variant="dark m-2">Incremento</Button>
    <Button onClick={decrement} variant="dark m-2">Decremento</Button>
    <Button onClick={reset} variant="dark m-2">Reiniciar</Button>
    </Form>
    </div>
    </>
  );

}

export default ItemCount
