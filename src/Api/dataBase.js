
const  datos = 'https://api.mercadolibre.com/sites/MLA/search?category=MLA1055';
export const getProducts= () =>{

return new Promise ((resolve) =>{
  
  resolve(
    fetch(datos)
    )
  

})

}


export const getProduct = () => {
  return new Promise ((resolve) =>{
  
  resolve(
    fetch(datos.results) 
    )
    
    console.log(datos)
  

})

}