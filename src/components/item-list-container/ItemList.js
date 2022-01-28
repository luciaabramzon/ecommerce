import React, { useState } from "react"
import Item from "./Item/Item"

const ItemList =({productos})=>{
    const [selectedItem,setSelectedItem]= useState(null);   
    return(
        <div>
        {
        productos?.map ((product)=> <Item key={product.id} product={product}  setSelectedItem={setSelectedItem}/>)
        }
        </div>
    )

}

export default ItemList