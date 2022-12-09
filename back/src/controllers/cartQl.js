const crypto=require('crypto')

class Cart{
    constructor(id,{title,products}){
        this.id=id
        this.title=title
        this.products=products
    }
}

const CartContainer=[]
const Product=require('./productQl')
const ProductsContainer=require('./productQl')


function getCartById({id}){
    if(!CartContainer[id]){
        throw new Error('Cart not found')
    }
    return CartContainer[id]
}

function getAllCarts(){
    const cart=Object.values(CartContainer)

     return cart
}

    function createCart({data}){
        const id=crypto.randomBytes(10).toString('hex')
        const prod_id=crypto.randomBytes(10).toString('hex')
        const newCart=new Cart(id,data)
        CartContainer[id]=newCart
        return newCart   
    }

function addProductToCart({id,product}){
   const cart= CartContainer.find(cart=> cart.id===id)
   const NewProduct={
    title:product.title,
    price:product.price,
    description: product.description,
    category:product.category,
    image:product.image,
    stock:product.stock
   }
   const newCart=cart.push(NewProduct)
   return newCart
}

function updateCart({id,data}){
    if(!CartContainer[id]){
        throw new Error('Product not found')
    }
    const updateCart=new Cart(id,data)
    CartContainer[id]=updateCart
    return updateCart
}

function deleteCart({id}){
    if(!CartContainer[id]){
        throw new Error('Cart not found')
    }
    const deleteCart=CartContainer[id]
    delete CartContainer[id]
    return deleteCart
}

function deleteProductFromCart({id}){
    if(!CartContainer[id]){
        throw new Error('Cart not found')
    }
    const deleteCart=CartContainer[id]
    const ProductToDelete=ProductsContainer[id]
    delete ProductToDelete
    return ProductToDelete

}

module.exports={
    Cart,
    CartContainer,
    getCartById,
    getAllCarts,
    createCart,
    addProductToCart,
    updateCart,
    deleteCart,
    deleteProductFromCart
}   