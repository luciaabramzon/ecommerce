import { useContext, useState } from "react"
import { Link } from "react-router-dom";
import Checkout from "../checkout/Checkout";
import '../Estilos.css'
import { CartContext } from "./CartContext";


const Cart= () => {
    const {items,deleteItem,borrarCarrito,grandTotal}= useContext(CartContext);
   console.log(items)
    if (items.length<1){
        return( 
        <div>
        <h1>Carrito Vacio</h1>
        <Link to="/" ><button className="buttonComprar">Comprar!</button></Link>
        </div> 
        )
    } else {
        
    return( 
   <div>
        
    <ul>
        {items.map((item)=>(
            <li key={item.id} className='styleParrafo'>
            {item.quantity} {item.name} -Precio Unitario ${item.price} - Precio Total ${item.price*item.quantity}
            <button className="buttonComprar" onClick={()=>deleteItem(item.id)} >
                x
            </button>
            </li>
        ))}
    </ul>
    <p className="styleParrafo">Total:$ {grandTotal()}</p>
    <div className="margin">
    <button onClick = {borrarCarrito } className="buttonComprar" >Borrar carrito</button>
    <Link to="/" ><button className="buttonComprar" >Seguir comprando</button></Link>
    </div>
<Checkout/>
    </div>
    )
}
}

export default Cart