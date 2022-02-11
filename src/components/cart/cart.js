import { useContext } from "react"
import { CartContext } from "./CartContext";

const Cart= () => {
    const {items}= useContext(CartContext);
     return( 
   <div>
    <ul>
        {items.map(({item})=>(
            <li>{item.name} - ${item.price}</li>
        ))}
    </ul>
    </div>
    )
}

export default Cart