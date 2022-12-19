import client from './index'

export async function getAllProducts(){
    const {data}=await client.get('/productos')
    return data
}

export async function addProduct(object){
    const {data}=await client.post('/productos',object)
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

export async function addProductToCart(id_producto,id){
    const {data}=await client.post(`/carrito/${id}/productos/${id_producto}`)
    return data
}