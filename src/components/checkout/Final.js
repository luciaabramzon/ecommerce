import { useContext, useEffect } from "react"
import { CartContext } from "../cart/CartContext"


const CartFinal = () =>{
    const {orderId,borrarCarrito,items}=useContext(CartContext)
 
   useEffect(()=>{
       borrarCarrito()
   },items)
    return (
    <div>
        <h1>Gracias por tu compra!</h1>
        <h4>Podes chequear el estado de cuenta siguiendo el ID {orderId}</h4>
    </div>
    )    
}
export default CartFinal