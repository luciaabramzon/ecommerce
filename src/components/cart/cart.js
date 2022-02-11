import { useContext, useState } from "react"
import { useParams } from "react-router-dom";
import { CartContext } from "./CartContext";


const Cart= () => {
    const {items,setItems}= useContext(CartContext);
    const [deleteItem,setDeleteItem]=useState([])
    const {id} = useParams ();

  
   
    const deleteCart = () =>{ 
        
    }
        
 
/*     const deleteItem = (id ) => {
        setCartList(cartlist.filter(items => item.id !== id))
       }
 */
       
const deleteProduct= (id) =>{
    const selectedItem=items.find(item=>item.id !==id)
    /*  setDeleteItem(deleteItem.filter(items=>items.id===!id)) */
 /*   */
  console.log(selectedItem)

 }

 
     return( 
   <div>
    <ul>
        {items.map(({item,quantity})=>(
            <li key={item.id}>
            {quantity} {item.name} -Precio Unitario ${item.price} - Precio Total ${item.price*quantity}
            <button onClick={deleteProduct}>
                x
            </button>
            </li>
        ))}
    </ul>
    <button onClick={deleteCart}>Borrar carrito</button>
    </div>
    )
}

export default Cart