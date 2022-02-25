import { useEffect, useState } from "react"
import '../Estilos.css'

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
    <div className="margin" >
<div>
<button onClick={minusCounter} className="buttonComprar" >-</button>
<span > {counter}</span>
<button onClick={plusCounter} className="buttonComprar" >+</button>
</div>
<div className="marginTop" >
<button  onClick={()=>handleAddToCart(counter) }className="buttonComprar"  >Añadir al carrito</button>
</div>
</div>
) 
}

export default ItemCounter
