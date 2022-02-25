import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../cart/CartContext';
import ItemCounter from '../item-counter/counter';
import '../Estilos.css'


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
        <h5 className='styleSubtitulo' >Productos seleccionados:</h5>
        {selectedItem &&  <img src={selectedItem.img} className='imgStyle'/>}
        <p className='styleParrafo'  >{selectedItem && selectedItem.name}</p>
        <p className='styleParrafo'  >{selectedItem && selectedItem.description}</p>
        <p className='styleParrafo'  >$ {selectedItem && selectedItem.price}</p> 
    {
        show ? <ItemCounter stock={selectedItem && selectedItem.stock} handleAddToCart={handleAddToCart} setStockSelected={setQuantity}/> :
    <div>
        <Link to="/cart"><button className='buttonComprar' >Ver carrito</button></Link> 
    </div>
    }
        <Link to="/" ><button className='buttonComprar'>Seguir comprando</button></Link>
    </div>
  );
};
