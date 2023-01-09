import client from './index'



export async function logOut(){
    const {data}= await client.post('/api/logout')
    return data
}

export async function signUp({username, password,name,address,tel,avatar,age}){
    const {data}=await client.post('/signup',{username, password,name,address,tel,avatar,age})
    console.log(data)
    return data
}

export async function login({username,password}){
    const {data}=await client.post('/login',{username,password})
    return data
}

export async function getAllProducts(){
    const {data}=await client.get('/productos')
    return data
}

export async function addProduct(object){
    const {data}=await client.post('/productos',object)
    return data
}

export async function getProductById(id){
    const {data}=await client.get(`/productos/${id}`)
    return data
}

export async function deleteProduct(id){
    const {data}=await client.delete(`/productos/${id}`)
    return data
}

export async function updateProduct(id,object){
    const {data}=await client.put(`/productos/${id}`,object)
  return data
}

export async function getCarts(){
    const {data}=await client.get('/carrito')
    return data
}

export async function addCart(){
    const {data}=await client.post('/carrito')
    return data
}

export async function addProductToCart(id,id_producto){
    const {data}=await client.post(`/carrito/${id}/productos/${id_producto}`)
    return data
}

export async function getCartById(id){
    const {data}=await client.get(`/carrito/${id}`)
    return data
}

export async function deleteCartProductById(id,id_producto){
    const {data}=await client.delete(`/carrito/${id}/productos/${id_producto}`)
    return data
}

export async function comprar(id,username){
    const {data}=await client.post(`/carrito/${id}/comprar/${username}`)
    return data
}

export async function deleteCartById(id){
    const {data}=await client.delete(`/carrito/${id}`)
    return data
}