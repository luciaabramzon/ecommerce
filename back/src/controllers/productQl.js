const crypto=require('crypto')

class Product{
    constructor(id,{title,price,description,category,image,stock}){
        this.id=id
        this.title=title
        this.price=price
        this.description=description
        this.category=category
        this.image=image
        this.stock=stock
    }
}

const ProductsContainer=[]


function getProduct({id}){
    if(!ProductsContainer[id]){
        throw new Error('Product not found')
    }
    return ProductsContainer[id]
}

function getProducts(){
    const product=Object.values(ProductsContainer)

     return product
}

function createProduct({data}){
    const id=crypto.randomBytes(10).toString('hex')
    const newProduct=new Product(id,data)
    ProductsContainer[id]=newProduct
    return newProduct   
}

function updateProduct({id,data}){
    console.log(ProductsContainer[id])
    if(!ProductsContainer[id]){
        throw new Error('Product not found')
    }
    const updateProduct=new Product(id,data)
    ProductsContainer[id]=updateProduct
    return updateProduct
}

function deleteProduct({id}){
    if(!ProductsContainer[id]){
        throw new Error('Product not found')
    }
    const deletedProduct=ProductsContainer[id]
    delete ProductsContainer[id]
    return deletedProduct
}

module.exports={
    Product,
    ProductsContainer,
    getProduct,
    getProducts,
    createProduct,
    updateProduct,
    deleteProduct
}