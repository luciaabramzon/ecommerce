import { useState } from "react"



const ItemCounter=({stock, onAdd})=>{
const [counter,setCounter]=useState(1);

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

const alert = () =>{
    console.log(`compraste ${counter} productos`)
}


return (   
<div  style={margin} >
<button onClick={minusCounter}>-</button>
<span > {counter}</span>
<button onClick={plusCounter}>+</button>
<button onClick={()=>onAdd(counter)}  >Comprar producto</button>
</div>
) 
}

export default ItemCounter
