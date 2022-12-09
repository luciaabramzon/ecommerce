
const {buildSchema}=require('graphql')

const {ProductType,
  ProductNewInput,
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct}= require('./productsQl')

  const{
    CartType,
    CartNewInput,
    getAllCarts,
    getCartById,
    createCart,
    addProductToCart,
    updateCart,
    deleteCart,
    deleteProductFromCart,
  }=require('./cartQl')


 const schema= buildSchema(`
  ${ProductType}
  ${ProductNewInput}
  ${CartType}
  ${CartNewInput}

type Query{
  ${getAllProducts}
  ${getProductById}
  ${getAllCarts}
  ${getCartById}
}

type Mutation{
  ${createProduct}
  ${updateProduct}
  ${deleteProduct}
  ${createCart}
  ${addProductToCart}
  ${updateCart}
  ${deleteCart}
  ${deleteProductFromCart}
} 
`)  



module.exports=schema