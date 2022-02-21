import { doc, getDoc, getFirestore } from "firebase/firestore";
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

    
 /*    useEffect(()=>{
      const db=getFirestore()
      const docRef=doc(db,"items",)
      console.log(id)
      getDoc(docRef).then((snapshot)=>{
        setSelectedItem({
          id:snapshot.id,
          ...snapshot.data()
        })
      })
    },[]) */

  
    useEffect (()=>{
        if(products.length>0){
            const selectedProduct= products.find ((product) => {product.id===id})
            setSelectedItem (selectedProduct)
            console.log(selectedProduct)
            
        }
    },[products])
    
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