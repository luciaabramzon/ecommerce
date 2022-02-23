import { useEffect, useState } from "react"



const ItemCounter=({stock, handleAddToCart,setStockSelected})=>{
const [counter,setCounter]=useState(1);


useEffect(()=>{
    setStockSelected(counter)
},[counter]);


const minusCounter=()=>{
    if (counter<=1) return ;
    setCounter(counter-1)
}

const plusCounter=()=>{
    
    if (counter>=stock) return;
    setCounter(counter+1)
}



const margin={
    marginBottom:15
}



return (   
<div  style={margin} >
<button onClick={minusCounter}>-</button>
<span > {counter}</span>
<button onClick={plusCounter}>+</button>
<button  onClick={()=>handleAddToCart(counter)} >Añadir al carrito</button>
</div>
) 
}

export default ItemCounter
