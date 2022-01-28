import React, { useState } from "react"
import Item from "./Item/Item"

const ItemList =({productos,setSelectedItem})=>{
    
    return(
        <div>
        {
        productos?.map ((product)=> <Item key={product.id} product={product}  setSelectedItem={setSelectedItem}/>)
        }
        </div>
    )

}

export default ItemList