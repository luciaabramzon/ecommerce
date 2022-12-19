import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteProduct, getAllProducts, updateProduct } from '../../api/services'
import ShowCarts from '../Cart/ShowCarts'


const ShowProducts=()=>{
   const [products,setProducts]=useState([])
   const [title,setTitle]=useState('')
   const [price,setPrice]=useState('')
   const [description,setDescription]=useState('')
   const [categoria,setCategoria]=useState('')
   const [image,setImage]=useState('')
   const[stock,setStock]=useState('')
   const [id,setId]=useState('')

   useEffect(()=>{
        getProducts()
    },[])

    const getProducts=async()=>{
        const res=await getAllProducts()
        setProducts(res)
    }

    const deleteProd=async(id)=>{
        deleteProduct(id)
   } 

   const editProd =(title,price,description,categoria,image,stock,id)=>{
   setTitle(title)
   setPrice(price)
   setDescription(description)
   setCategoria(categoria)  
   setImage(image)
   setStock(stock)
   setId(id) 
   }

   const edit=async (id)=>{
     const res=await updateProduct(id,{title,price,description,categoria,image,stock,id})
    console.log(res)
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
                    <th>Id</th>
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
                            <td><button onClick={()=>deleteProd(prod._id)}>Eliminar Producto</button></td>
                            <td><button onClick={()=>editProd(prod.title,prod.price,prod.description,prod.categoria,prod.image,prod.stock,prod._id)}>Editar producto</button></td>
                            <td><button>Agregar al carrito</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            <form>
                <label>Title</label>
            <input
            value={title}
            onChange={(e)=>{setTitle(e.target.value)}}
            type='text'
            />
            <label>Price</label>
            <input
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
            type='number'
            />
            <label>Description</label>
            <input
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
            type='text'
            />
            <label>Category</label>
            <input
            value={categoria}
            onChange={(e)=>setCategoria(e.target.value)}
            type='text'
            />
            <label>Image</label>
            <input
            value={image}
            onChange={(e)=>setImage(e.target.value)}
            type='text'
            />
            <label>Stock</label>
            <input
            value={stock}
            onChange={(e)=>setStock(e.target.value)}
            type='number'
            />
            
            <button onClick={edit(id)}  >
            Editar
            </button>
            </form>
            <button>Ver carritos</button>
            <ShowCarts products={products}/>
             </div>
        </>
    )


}

export default ShowProducts