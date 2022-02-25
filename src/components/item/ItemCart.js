import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../cart/CartContext';
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



export const ItemCart = ({selectedItem,setQuantity,quantity}) => {
    const {addItem}=useContext(CartContext)
    const [show,setShow]=useState(true)

    const handleAddToCart=(counter)=>{
        setShow(false)
            addItem({
            ...selectedItem,
            quantity:counter,
        })
    }
  return (
    <div>
        <h5 style={styleSubtitulo} >Productos seleccionados:</h5>
        {selectedItem &&  <img src={selectedItem.img} syle={imgStyle} />}
        <p style={styleParrafo} >{selectedItem && selectedItem.name}</p>
        <p style={styleParrafo}>{selectedItem && selectedItem.description}</p>
        <p style={styleParrafo}>$ {selectedItem && selectedItem.price}</p> 
    {
        show ? <ItemCounter stock={selectedItem && selectedItem.stock} handleAddToCart={handleAddToCart} setStockSelected={setQuantity}/> :
    <div>
        <Link to="/cart"><button >Ver carrito</button></Link> 
    </div>
    }
        <Link to="/" ><button>Seguir comprando</button></Link>
    </div>
  );
};
