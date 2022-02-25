import { createContext, useState } from "react"
import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore";
export const CartContext=createContext()

export const CartProvider = ({children})=>{
    const[items,setItems]=useState([])
        
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
    
    const [orderId,setOrderId]=useState(null)

    const deleteItem = (id) => {
        setItems(items.filter(item=>item.id!==id));
       
    }

    const borrarCarrito = () =>{
        setItems( [])
    } 

    const grandTotal=()=>{
        return items.reduce((acum,prod)=>acum + (prod.quantity * parseInt(prod.price ) ),0)
    }

    const totalCart=()=>{
        return items.reduce((acum, prod)=> acum +( prod.quantity),0)
    
    }

    const addItem=(currentItem)=>{
        const indice=items.findIndex(item=>item.id===currentItem.id)

            if(indice >-1){ 
                alert("producto duplicado")
                const oldQuantity= items[indice].quantity
                items[indice].quantity= oldQuantity+currentItem.quantity
            } else{ 
                setItems([...items,currentItem])
            }
    };

    const onChange=(event)=>{
        setBuyer({...buyer,[event.target.name]:event.target.value})
    }
 
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
    return (
        <CartContext.Provider value={{
            items,
            addItem,
            deleteItem,
            borrarCarrito,
            grandTotal,
            totalCart,
            buyer,
            inputs,
            onChange,
            orderId,
            sendOrder,
        }
         }>
            {children}
         </CartContext.Provider>
)
}

export default CartProvider