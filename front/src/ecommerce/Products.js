import { useEffect, useState } from 'react'
import axios from 'axios'
const URL='http://localhost:8000/productos'

const ShowProducts=()=>{
   const [products,setProducts]=useState([])

    useEffect(()=>{
        getProducts()
    },[])

    const getProducts=async()=>{
        const res=await axios.get(URL)
        setProducts(res.data)
    }

    const deletePost=async(id)=>{
        await axios.delete(`${URL}${id}`)
        getProducts()
    } 
    return(
        <>
             <div>
                <h1>Productos</h1>
                <table>
                    <thead>
                    <th>Titulo</th>
                    <th>Precio</th>
                    <th>Descripcion</th>
                    <th>Categoria</th>
                    <th>Imagen</th>
                    <th>Stock</th>
                    </thead>
                    <tbody>
                        {products.map((prod)=>(
                            <tr key={prod._id}>
                            <td>{prod.title}</td>
                            <td>{prod.price}</td>
                            <td>{prod.description}</td>
                            <td>{prod.categoria}</td>
                            <td>{prod.image}</td>
                            <td>{prod.stock}</td>
                            <td><button>Agregar al carrito</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
             </div>
        </>
    )


}

export default ShowProducts