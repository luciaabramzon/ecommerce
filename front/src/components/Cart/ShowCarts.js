import { useEffect, useState } from "react"
import { getCarts} from "../../api/services"

const ShowCarts = ({products,setProducts})=>{
    const [carts,setCarts]=useState([])

    const getAllCarts = async ()=>{
        const res= await getCarts()
        setCarts(res)
    }

    useEffect(()=>{
        getAllCarts()
    },[])

      for(let i=0; i<= carts.length; i++){
        return (
            <div>
                <h1>Carritos</h1>
        {carts.map((cart)=>(
            <div key={cart._id}>
                <h1>{cart.carrito}</h1>
                <ul key={cart.productos[i].id_productos}>Producto: {cart.productos[i].title_producto}</ul>
                <ul>Precio $: {cart.productos[i].price}</ul>
                <ul>Descripcion: {cart.productos[i].description}</ul>
            </div>
        ))}
            </div>
        )

    }

}

export default ShowCarts