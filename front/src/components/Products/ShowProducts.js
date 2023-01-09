import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { deleteProduct, getAllProducts, updateProduct,addProductToCart, getCarts,addCart, getCartById, getProductById } from '../../api/services'
import ShowCarts from '../Cart/ShowCarts'


const ShowProducts=()=>{
   const [products,setProducts]=useState([])

   const getProducts=async()=>{
   const res=await getAllProducts()
        setProducts(res) 
    }

    useEffect(()=>{
        getProducts()
    },[])

   const getAllCarts = async (e,id_prod)=>{
    const res= await getCarts()

    if(res.length===0){
        const newCart=await addCart({
            productos:[]
        })
        const res= await getCarts()
        const id=res[0]._id
        console.log(id)
        localStorage.setItem('carritoId',id)
        const id_producto=id_prod
        const addProd=await addProductToCart(id,id_producto)
        alert('Producto agregado') 
            
    }else {
        const id=res[0]._id
        localStorage.setItem('carritoId',id)
        const id_producto=id_prod
        const addProd=await addProductToCart(id,id_producto)
        alert('Producto agregado') 
    }
 }
      return(
        <>
             <div>
                <h1>Productos</h1>
                <table>
                    <thead>
                    <th>Titulo</th>
                    <th>Precio</th>
                    <th>Imagen</th>
                    </thead>
                    <tbody>
                        {products.map((prod)=>(
                            <tr key={prod._id}>
                            <td>{prod.title}</td>
                            <td>${prod.price}</td>
                            <td><img src={prod.image} width="15%"/></td>
                            <td ><button onClick={(e)=>getAllCarts(e,prod._id)} id={prod._id}>Agregar al carrito</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Link to='/carrito'><button>Ver carrito</button></Link>
             </div> 
        </>
    )


}

export default ShowProducts