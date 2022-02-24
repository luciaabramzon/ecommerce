import { useContext, useState } from "react"
import { CartContext } from "../cart/CartContext";
import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore";
import { Link, useParams } from "react-router-dom";
import { Form } from "react-bootstrap";

const Checkout = () => {
    const {items,grandTotal,borrarCarrito}=useContext(CartContext)
    const {id} = useParams ();

    const[buyer,setBuyer]=useState({
        name:"",
        phone:"",
        email:"",
    })

    const inputs=[
        {label:"nombre",name:"name"},
        {label:"phone",name:"phone"},
        {label:"email",name:"email"}
    ]

    const onChange=(event)=>{
        setBuyer({...buyer,[event.target.name]:event.target.value})
    }
    

    const [orderId,setOrderId]=useState(null)

    const sendOrder = () =>{
        const order={
            buyer,
            item:items,
            total:grandTotal(),
        }
        const db=getFirestore();
        const orderCollection=collection(db,"orders")

        addDoc(orderCollection,order).then(({id})=>setOrderId(id))
       
            items.forEach(item=> {
            const docRef=doc(db,"items",item.id);
            updateDoc(docRef,{stock:item.stock-item.quantity})
            })

    }
    console.log(orderId)
   

    if(orderId===null){
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
         <button disabled={!(buyer.name && buyer.phone && buyer.email)} onSubmit={onsubmit} onClick={sendOrder}>Crear orden</button>
     </div>
        )
    }
    return <h2>Tu compra se realizo correctamente, podes seguirla mediante tu ID {orderId}</h2>
    
}

export default Checkout