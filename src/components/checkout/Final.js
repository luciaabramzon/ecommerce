import { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../cart/CartContext"
import '../Estilos.css'


const CartFinal = () =>{
    const {orderId,borrarCarrito,items}=useContext(CartContext)
 
   useEffect(()=>{
       borrarCarrito()
   },items)
    return (
    <div>
        <h1 className="ofertas">Gracias por tu compra!</h1>
        <h4 className="styleParrafo">Podes chequear el estado de cuenta siguiendo el ID {orderId}</h4>
        <Link to="/"><button className="buttonComprar">Volver a la tienda</button></Link>
    </div>
    )    
}
export default CartFinal