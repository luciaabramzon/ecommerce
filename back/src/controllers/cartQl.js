const crypto=require('crypto')

class Cart{
    constructor(id,{title,products,prod_id}){
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

function addProductToCart({id,data}){
   const cart= CartContainer[id]
   const NewProduct=data
   console.log(NewProduct)
   const newCart=new Cart(cart,NewProduct)
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

function deleteProductFromCart({id,prod_id}){
    if(!CartContainer[id]){
        throw new Error('Cart not found')
    }
    const deleteCart=CartContainer[id]
    CartContainer[id].products=CartContainer[id].products.filter(prod=>prod.id!==prod_id)
    return CartContainer[id]

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