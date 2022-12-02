import axios from "axios"
import { useState } from "react"
import { Form, Link } from "react-router-dom"
import { addProduct } from "../../api/services"
const URL='http://localhost:8000/productos'

const AddProducts=()=>{
    const [title,setTitle]=useState('')
    const [price,setPrice]=useState('')
    const [description,setDescription]=useState('')
    const [categoria,setCategoria]=useState('')
    const [image,setImage]=useState('')
    const[stock,setStock]=useState('')

    const add=async(e)=>{
        if(title===''||price===''||description===''|| categoria===''|| image===''|| stock ===''){
            alert('Todos los campos son obligatorios')
            return
        }else{
            e.preventDefault()
            const res=await addProduct({title,price,description,categoria,image,stock})
            return res
        }
    }

   
    return(
        <>
        <form onSubmit={add}>
            <label>Title</label>
            <input
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
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
            
            <button type='submit'>
            Agregar
            </button>
            <Link to='/product'>
                Ver Productos
            </Link>   
        </form>
        </>
    )
}

export default AddProducts