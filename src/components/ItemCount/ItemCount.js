import React, {useState} from 'react'
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



let sinProd = `Indica la cantidad`;
let conProd = `Estas comprando ${count} unidades`;


   return (<>
   
    <h3 className="my-2 text-center">{count===0 ? sinProd : conProd}</h3>  
    <div className="d-inline-flex align-content-center justify-content-center form-group container">
    <Form>

    
  <div className="d-inline-flex">
    <h1 onClick={increment} variant="dark" className="btn btn-dark display-1">+</h1>
    <FormControl readOnly value={count} className="mx-2 text-center" />
  
  <h1 onClick={decrement} variant="dark" className="btn btn-dark display-1">-</h1>
   
    </div>
    </Form>

    </div>
    </>
  );

}

export default ItemCount
