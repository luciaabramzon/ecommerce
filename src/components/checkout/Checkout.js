import { useContext, useState } from "react"
import { CartContext } from "../cart/CartContext";
import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore";
import { Link, useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

const Checkout = () => {
    const {items,grandTotal,borrarCarrito,buyer,inputs,onChange,orderId,sendOrder}=useContext(CartContext)
    const {id} = useParams ();

        return(
     <div>
         {inputs.map((input)=>(
             <form key={input.name}>
                 <label>{input.label}</label>
                 <input
                 type="text"
                 value={buyer[input.name]}
                 onChange={onChange}
                 name={input.name}
                 />
                 </form>
         ))}
     <Link to="/Final">    <button disabled={!(buyer.name && buyer.phone && buyer.email)} onSubmit={onsubmit} onClick={sendOrder}>Crear orden</button></Link>
     </div>
        )
    }

  


export default Checkout