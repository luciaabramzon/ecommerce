import { useEffect, useState } from "react"
import { getCarts } from "../../api/services"

const ShowCarts = ()=>{
    const [carts,setCarts]=useState('')

    const getAllCarts = async ()=>{
        const res= await getCarts()
        setCarts(res)
        console.log(carts)
    }

    useEffect(()=>{
        getAllCarts()
    },[])
    
    return(
        <>
        <h1>Carritos</h1>
      
        </>
    )
}

export default ShowCarts