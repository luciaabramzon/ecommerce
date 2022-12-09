const ProductType=`
type Product{
    id: ID!
    title: String
    price: Int
    description: String
    category: String
    image: String
    stock: Int
}
`
const ProductNewInput=`
    input ProductNewInput{
        id: ID!
        title: String
        price: Int
        description: String
        category: String
        image: String
        stock: Int
    }
`
const getAllProducts= `
    getProducts: [Product]
`

const getProductById=`
    getProduct(id: ID!): Product
`   

const createProduct=`
    createProduct(data: ProductNewInput): Product
`

const updateProduct=`
    updateProduct(id: ID!, data: ProductNewInput): Product
`

const deleteProduct=`
    deleteProduct(id: ID!): Product
`



module.exports={
    ProductType,
    ProductNewInput,
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}