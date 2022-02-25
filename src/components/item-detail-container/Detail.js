import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../helpers/useProducts"
import { ItemCart } from "../item/ItemCart";

const Detail=({handleAddToCart})=>{
     
    const {products}= useProducts();
    const {id} = useParams ();
    const [selectedItem,setSelectedItem]=useState(null);
    const [quantity,setQuantity]=useState(0)
   
    useEffect (()=>{
        if(products.length>0){
            const selectedProduct= products.find ((product) => 
            product.id===id)
            setSelectedItem (selectedProduct)
         }
    },[products])
   
    return (
      <div>
        <ItemCart selectedItem={selectedItem} setQuantity={setQuantity} handleAddToCart={handleAddToCart}  />
  </div>
  )
}

export default Detail;