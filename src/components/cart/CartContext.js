import { createContext, useState } from "react"
import { Link } from "react-router-dom"

export const CartContext=createContext()



export const CartProvider = ({children})=>{
    const[items,setItems]=useState([])
    
    const deleteItem = (id) => {
        setItems(items.filter(item=>item.id!==id));
       
    }

    const borrarCarrito = () =>{
        setItems( [])
    } 

    const grandTotal=()=>{
        return items.reduce((acum,prod)=>acum + (prod.quantity * parseInt(prod.price ) ),0)
    }


const addItem=(currentItem)=>{
    const indice=items.findIndex(item=>item.id===currentItem.id)
    console.log(items)
    console.log(indice)
    if(indice >-1){ 
        alert("producto duplicado")
        const oldQuantity= items[indice].quantity
        items[indice].quantity= oldQuantity+currentItem.quantity
       /*  setItems([...items,currentItem]) */
    } else{ 
        setItems([...items,currentItem])
    }
        
    };
    return (
        <CartContext.Provider value={{
            items,
            addItem,
            deleteItem,
            borrarCarrito,
            grandTotal,
        }
         }>
            {children}
         </CartContext.Provider>
)
}

export default CartProvider