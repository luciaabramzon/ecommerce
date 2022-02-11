import { useContext, useState } from "react"
import { useParams } from "react-router-dom";
import { CartContext } from "./CartContext";


const Cart= () => {
    const {items,setItems}= useContext(CartContext);
    const [deleteItem,setDeleteItem]=useState([])
    const {id} = useParams ();
    
    
const deleteProduct= () =>{
  const selectedItem= id? items.find(({id})=>id===id):items 

/*     const filterProducts = id ? products.filter (({category})=>category===id): products
    

   const selectedItem= items.find((item)=>(id===item.id)) */
   setDeleteItem (selectedItem)
   console.log(setDeleteItem)
 }

 const deleteCart= () =>{
   
  setItems(!items)
 }
     return( 
   <div>
    <ul>
        {items.map(({item,quantity})=>(
            <li>
            {quantity} {item.name} -Precio Unitario ${item.price} - Precio Total ${item.price*quantity}
            <button onClick={deleteProduct}>
                x
            </button>
            </li>
        ))}
    </ul>
    <button onClick ={deleteCart }>x</button>
    </div>
    )
}

export default Cart