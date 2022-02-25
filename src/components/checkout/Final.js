import { useContext } from "react"
import { CartContext } from "../cart/CartContext"


const CartFinal = () =>{
    const {orderId}=useContext(CartContext)
console.log(orderId)

    return <h1>Orden {orderId}</h1>
    
}
export default CartFinal