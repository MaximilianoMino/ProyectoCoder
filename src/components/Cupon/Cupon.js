import React from "react";
import "./cupon.scss";
const Cupon = ({ cupon }) => {
  return (
    <>
     <div class="cardWrap">
  <div class="card cardLeft">
    <h1 className="m-auto">¡Feliz Año!</h1>
    <div class="title">
      <p className="h4">{cupon}</p>
    
 
    <div class="barcode"></div>
  </div>

</div>
</div>
     
    </>
  );
};

export default Cupon;
