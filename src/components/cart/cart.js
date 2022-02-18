import { useContext, useState } from "react"
import { Link } from "react-router-dom";

import { CartContext } from "./CartContext";


const Cart= () => {
    const {items,deleteItem,borrarCarrito,grandTotal}= useContext(CartContext);
   console.log(items)
    if (items.length<1){
        return( 
        <div>
        <h1>Carrito Vacio</h1>
        <Link to="/" ><button>Seguir comprando</button></Link>
        </div> 
        )
    } else {
        
    return( 
   <div>
        
    <ul>
        {items.map((item)=>(
            <li key={item.id}>
            {item.quantity} {item.name} -Precio Unitario ${item.price} - Precio Total ${item.price*item.quantity}
            <button onClick={()=>deleteItem(item.selectedItem.id)}>
                x
            </button>
            </li>
        ))}
    </ul>
    <p>Total: {grandTotal()}</p>
    <button onClick = {borrarCarrito }>Borrar carrito</button>

    </div>
    )
}
}

export default Cart