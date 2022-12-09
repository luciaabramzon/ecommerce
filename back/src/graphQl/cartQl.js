const {ProductType,ProductNewInput}=require('./productsQl')

const CartType=`
type Carts{
    id: ID!
    title: String
    products: [Product]
}
`
const CartNewInput=`
    input CartNewInput{
    id: ID!
    title: String
    products: [ProductNewInput]
    }
`
const getAllCarts= `
    getAllCarts: [Carts]
`

const getCartById=`
    getCartById(id: ID!): Carts
`   

const createCart=`
    createCart(data: CartNewInput): Carts
`
const addProductToCart=`
    addProductToCart(id: ID!, data: ProductNewInput): Carts
`


const updateCart=`
    updateCart(id: ID!, data: CartNewInput): Carts
`

const deleteCart=`
    deleteCart(id: ID!): Carts
`
const deleteProductFromCart=`
    deleteProductFromCart(id: ID!, product_id: ID!): Carts
`


module.exports={
    CartType,
    CartNewInput,
    getAllCarts,
    getCartById,
    createCart,
    addProductToCart,
    updateCart,
    deleteCart,
    deleteProductFromCart
}