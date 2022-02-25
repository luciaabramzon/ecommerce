import { collection, getDoc, getDocs, getFirestore, limit, query, where } from "firebase/firestore"
import { useEffect, useState } from "react"
import SpinnerBs from "../icon/spinnerBootstrap"
import Item from "../item-list-container/Item/Item"
import '../Estilos.css'


const Oferta=()=>{
const [sale,setSale]=useState([])
const [loadingOfertas,setLoadingOfertas]=useState(true)

useEffect(()=>{
    const db=getFirestore();
    const itemSale=query(
        collection(db,"items"),
        where("price","<=",100),
    )
    setTimeout(()=>{
        setLoadingOfertas(false)
        },2000)

    getDocs(itemSale).then((snapshot)=>{
        setSale(snapshot.docs.map((doc)=>({
            ...doc.data(),
            id:doc.id,
        })))
    })
},[])

if(loadingOfertas===true){
    return(
        <div>
        <h1 className="ofertas"> Encontra nuestras ofertas semanales por menos de $100</h1>
        <SpinnerBs/>
        </div>
    )
}

return (
<div>
    <h1 className="ofertas"> Encontra nuestras ofertas semanales por menos de $100</h1>

 { sale && sale.map((product)=>
<Item product={product} key={product.id}/>)
}
</div>)
}

export default Oferta