import React, { useState } from "react"
import { useParams } from "react-router-dom";
import { useProducts } from "../helpers/useProducts";
import Item from "./Item/Item"

const ItemList =()=>{
    const {id} = useParams();
    const {products}=useProducts ();

    const filterProducts = id ? products.filter (({category})=>category===id): products
    
    return(
        <div>
            {
            filterProducts.map ((product)=>
            <Item key={product.id} product={product} />  
          
            )}
 
            </div>
    )

}

export default ItemList