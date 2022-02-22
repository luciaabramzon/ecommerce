import { useState } from "react"

const Checkout = () => {
    const[buyer,setBuyer]=useState({
        name:"",
        phone:"",
        email:"",
    })


    const [orderId,setOrderId]=useState(null)

    return  (
        <div>
            

         <label>Nombre <input value={buyer.name} name="name" onChange={(e)=>setBuyer({...buyer,name:e.target.value})}/></label>
         <label>Email <input value={buyer.email} name="name" onChange={(e)=>setBuyer({...buyer,email:e.target.value})}/></label>
         <label>Telefono <input value={buyer.phone} name="name" onChange={(e)=>setBuyer({...buyer,phone:e.target.value})}/></label>      
        </div>
    )
    
    

}

export default Checkout