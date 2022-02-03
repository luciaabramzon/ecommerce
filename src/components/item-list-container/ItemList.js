import React, { useState } from "react"
import { useParams } from "react-router-dom";
import { useProducts } from "../helpers/useProducts";
import Item from "./Item/Item"

const ItemList =()=>{
    const {id} = useParams();
    const {products}=useProducts ();

    const filterProducts = products.filter (({category})=>category===id)
    
    return(
        <div>
            {!id &&
            products?.map ((product)=>
            <Item key={product.id} product={product} />  
            
            )}
            {id && filterProducts.map ((product)=>
                <Item key={product.id} product={product}/>  
             ) }
            </div>
    )

}

export default ItemList