import { useContext, useState } from "react"
import { Link } from "react-router-dom";

import { CartContext } from "./CartContext";


const Cart= () => {
    const {items,setItems}= useContext(CartContext);
    const [newItem,setNewItem]=useState([])
    
  console.log(items)

    const deleteItem = (id) => {
        setNewItem(items.filter(item=>item.id!==id));
    }

    const borrarCarrito = (setItems) =>{
        setItems(!items)
        console.log(items)
    }

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
        {items.map(({item,quantity})=>(
            <li key={item.id}>
            {quantity} {item.name} -Precio Unitario ${item.price} - Precio Total ${item.price*quantity}
            <button onClick={()=>deleteItem(item.id)}>
                x
            </button>
            </li>
        ))}
    </ul>
    <button onClick = {()=>borrarCarrito(items) }>Borrar carrito</button>

    </div>
    )
}
}

export default Cart