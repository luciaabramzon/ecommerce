import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Checkout from '../checkout/Checkout';
import ItemCounter from '../item-counter/counter';

const styleParrafo = {
    color:"#AD7E47",
    fontSize:20,
    fontFamily:"Montserrat",
    marginTop:20
}

const styleSubtitulo={
    color:"#AD7E47",
    fontSize:30,
    fontFamily:"Montserrat",
    marginTop:25,
    fontWeight:"bold"
}

const imgStyle={
    width:450,
    height:330,
}



export const ItemCart = ({selectedItem,setQuantity,handleAddToCart}) => {
    const [show,setShow]=useState(true)

      
    const onAdd= (counter)=>{
        setShow (false) 
        alert(`Selecciono ${counter} articulos, no olvide agregarlos al carrito`)
   }
  
   
  return (
    <div>
      
    <h5 style={styleSubtitulo} >Productos seleccionados:</h5>
       {selectedItem &&  <img src={selectedItem.img} syle={imgStyle} />}
      <p style={styleParrafo} >{selectedItem && selectedItem.name}</p>
      <p style={styleParrafo}>{selectedItem && selectedItem.description}</p>
      <p style={styleParrafo}>{selectedItem && selectedItem.price}</p> 
      
      {show ? <ItemCounter stock={selectedItem && selectedItem.stock} onAdd={onAdd} setStockSelected={setQuantity}/> :
         <div>
         <Link to="/cart"><button onClick={handleAddToCart} >Agregar al carrito</button></Link>
        </div> }
        <Link to="/" ><button>Seguir comprando</button></Link>
         </div>
  );
};
