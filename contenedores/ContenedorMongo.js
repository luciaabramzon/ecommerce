const mongoose=require('mongoose')
const config= require('../config')
const {Types}=require('mongoose')

async function connect(){
    await mongoose.connect(config.mongodb.connectionString)
}
connect()

class ContenedorMongo{
    constructor (nombreCollecion,schema){
        this.colleccion=mongoose.model(nombreCollecion,schema)
    }

    async save(object){
        try{
            const document=new this.colleccion(object)
            this.colleccion(document).save()
        }catch(error){
            throw new Error(`Error: ${error}`)
        }
    }

    async getAll(){
        const data=await this.colleccion.find()
        return data
    }

    async getById(id){
        const dataId=await this.colleccion.findOne({_id:id})
        return dataId
    }

    async getByCategoria(categoria){
       const  dataCat=await this.colleccion.find({categoria:categoria})  
        return dataCat
    }

    async updateById(id,object){
            const product=await this.colleccion.updateOne({_id:id},{$set:{
                title:object.title,
                price:object.price,
                image:object.image,
                description:object.description,
            }})
        return product
    }

    async updateCart(id,object){
        const product=await this.colleccion.updateOne({_id:id},{$set:{
            productos:object.productos
        }}
        ) 
    return product
}
   
    async updateByCartId(id,object){
        const product=await this.colleccion.findOne({_id:id})
        this.colleccion(object).save()
    }


    async deleteById(id){
        const borrar=await this.colleccion.deleteOne({_id:id})
        return borrar
    }

}


module.exports=ContenedorMongo