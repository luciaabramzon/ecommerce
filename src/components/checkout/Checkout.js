import { useContext, useState } from "react"
import { CartContext } from "../cart/CartContext";
import { Link, useParams } from "react-router-dom";
import '../Estilos.css'

const Checkout = () => {
    const {buyer,inputs,onChange,sendOrder}=useContext(CartContext)

        return(
     <div>
         {inputs.map((input)=>(
             <form key={input.name}>
                 <label className="styleParrafo">{input.label}</label>
                 <input
                 type="text"
                 value={buyer[input.name]}
                 onChange={onChange}
                 name={input.name}
                 />
                 </form>
         ))}
     <Link to="/Final"><button className="buttonComprar" disabled={!(buyer.name && buyer.phone && buyer.email)} onSubmit={onsubmit} onClick={sendOrder}>Crear orden</button></Link>
     </div>
        )
    }

  


export default Checkout