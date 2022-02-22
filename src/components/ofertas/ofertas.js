import { collection, getDoc, getDocs, getFirestore, limit, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import Item from "../item-list-container/Item/Item"



const Oferta=()=>{
const [sale,setSale]=useState([])

useEffect(()=>{
    const db=getFirestore();
    const itemSale=query(
        collection(db,"items"),
        where("price","<=",100),
       
    )

    getDocs(itemSale).then((snapshot)=>{
        setSale(snapshot.docs.map((doc)=>({
            ...doc.data(),
            id:doc.id,
        })))
    })
},[])

return (
<div>
    <h1> Encontra nuestras ofertas semanales por menos de $100</h1>
{/* {sale && sale.map((product)=>(
    <li>{product.name}</li>
   
))} */} { sale && sale.map((product)=>
<Item product={product} key={product.id}/>)
}
</div>)
}

export default Oferta