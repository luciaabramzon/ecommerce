import React from 'react';
import { Link } from 'react-router-dom';
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




export const ItemCart = ({selectedItem,setQuantity,handleAddToCart,onAdd}) => {
   
  return (
    <div>
      
    <h5 style={styleSubtitulo} >Productos seleccionados:</h5>
       {selectedItem &&  <img src={selectedItem.img}/>}
      <p style={styleParrafo} >{selectedItem && selectedItem.name}</p>
      <p style={styleParrafo}>{selectedItem && selectedItem.description}</p>
      <p style={styleParrafo}>{selectedItem && selectedItem.price}</p> 
      <ItemCounter stock={selectedItem && selectedItem.stock} onAdd={onAdd} setStockSelected={setQuantity}/>
        {/* <button onClick={handleAddToCart} >Agregar al carrito</button> 
      <Link to="/cart"><button >Ver Carrito</button></Link>
    <button onClick ={()=>setSelectedItem(!selectedItem) }>x</button>
      <Link to="/" style={buttonComprar}>Volver</Link> */} 
      </div>
  );
};
