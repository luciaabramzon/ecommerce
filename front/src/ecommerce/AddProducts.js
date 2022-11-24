import axios from "axios"
import { useState } from "react"
import { Form } from "react-router-dom"
const URL='http://localhost:8000/productos'

const AddProducts=()=>{
    const [title,setTitle]=useState('')
    const [price,setPrice]=useState('')
    const [description,setDescription]=useState('')
    const [category,setCategory]=useState('')
    const [image,setImage]=useState('')
    const[stock,setStock]=useState('')

    const add=async(e)=>{
        if(title===''||price===''||description===''|| category===''|| image===''|| stock ===''){
            alert('Todos los campos son obligatorios')
            return
        }else{
            e.preventDefault()
            await axios.post(URL,{title,price,description,category,image,stock})
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
            value={category}
            onChange={(e)=>setCategory(e.target.value)}
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
        </form>
        </>
    )
}

export default AddProducts