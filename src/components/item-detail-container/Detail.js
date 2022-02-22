import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../cart/CartContext";
import { useProducts } from "../helpers/useProducts"
import ItemCounter from "../item-counter/counter";
import Item from "../item-list-container/Item/Item";
import { ItemCart } from "../item/ItemCart";



const styleParrafo = {
    color:"#AD7E47",
    fontSize:20,
    fontFamily:"Montserrat",
    marginTop:20
}

const Detail=()=>{
     
    const {products,setProducts}= useProducts();
    const {id} = useParams ();
    const [selectedItem,setSelectedItem]=useState(null);
    const {addItem}=useContext(CartContext)
    const [quantity,setQuantity]=useState(0)

    
  useEffect(()=>{
      const db=getFirestore()
      const docRef=doc(db,"items",id)
          getDoc(docRef).then((snapshot)=>{
        setSelectedItem(({ 
          ...snapshot.data(),
          id:snapshot.id,
        }))
      })
    },[])   


    const handleAddToCart=()=>{
            addItem({
            ...selectedItem,
            quantity:quantity,
        })
        
    }

  
    return (
    <div>
  <ItemCart selectedItem={selectedItem} setQuantity={setQuantity} handleAddToCart={handleAddToCart}  />

  </div>
  )
}

export default Detail;