import { useContext, useState } from "react"
import { CartContext } from "../cart/CartContext";
import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";

const Checkout = () => {
    const {items,grandTotal,borrarCarrito}=useContext(CartContext)
    const {id} = useParams ();

    const[buyer,setBuyer]=useState({
        name:"",
        card:"",
        email:"",
    })

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

    if(orderId===null){
        return(
            <div>
                <form><h2>Completa el formulario para terminar tu</h2>
        <label>Nombre <input value={buyer.name} name="name" onChange={(e)=>setBuyer({...buyer,name:e.target.value})}/></label>
         <label>Email <input value={buyer.email} name="name" onChange={(e)=>setBuyer({...buyer,email:e.target.value})}/></label>
         <label>Tarjeta <input value={buyer.card} name="name" onChange={(e)=>setBuyer({...buyer,card:e.target.value})}/></label>      
        <button onClick={sendOrder}> Terminar Compra</button>
        </form>
        </div>
        )
    }
    return<h2>Tu compra se realizo correctamente, podes seguirla mediante tu ID {orderId}</h2>
}

export default Checkout