
import { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'
import {  getAllProducts,addProductToCart, getCarts,addCart } from '../../api/services'
import { Card,Image,Button, Header } from 'semantic-ui-react'

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
        <Header as='h1' color='teal'>Productos</Header>
        <Card.Group itemsPerRow={3}>
        {products.map((prod)=>(
            <Card>
                <Card.Content>
                    
                        <>
                        <Image
                        floated='right'
                        src={prod.image}
                        />
                        <Card.Header>
                        {prod.title}
                        </Card.Header>
                        <Card.Meta>
                            {prod.price}
                        </Card.Meta>
                        <Card.Description>
                            {prod.description}
                        </Card.Description>
                        <Button basic color='green' onClick={(e)=>getAllCarts(e,prod._id)} id={prod._id}>
                            Agregar al carrito
                        </Button>
                        </>
                        
                  
                </Card.Content>
                
            </Card>
            
            ))}
        </Card.Group>
        <br/>
        <br/>
        <div>
        <Link to='/carrito'><Button positive>Ver Carrito</Button></Link>
    </div>

   
        </>
    )


}

export default ShowProducts