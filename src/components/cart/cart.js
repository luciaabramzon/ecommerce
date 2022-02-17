import { useContext, useState } from "react"
import { useParams } from "react-router-dom";
import { useProducts } from "../helpers/useProducts";
import { CartContext } from "./CartContext";


const Cart= () => {
    const {items}= useContext(CartContext);
    const [item,setItem]=useState([])
    const {id}=useParams()
    const {products}=useProducts ();

   const deleteItem=(id)=>{
   /*  setItem( items.filter(prods=>prods.id!==id)) */
     
     setItem(!items)
     console.log(setItem)
   }
    return( 
   <div>
    <ul>
        {items.map(({item,quantity})=>(
            <li key={item.id}>
            {quantity} {item.name} -Precio Unitario ${item.price} - Precio Total ${item.price*quantity}
            <button onClick={()=>deleteItem(item.id)}>
                x
            </button>
            </li>
        ))}
    </ul>
    <button >Borrar carrito</button>
    </div>
    )
}

export default Cart