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
            

         <label>Nombre <input name={buyer.name}/></label>
         <label>Edad <input name={buyer.edad}/></label>   
         <label>Email <input name={buyer.email}/></label>      
        </div>
    )
    
    

}

export default Checkout