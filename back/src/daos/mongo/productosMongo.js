const ContenedorMongo=require('../contenedores/ContenedorMongo')

class ProductosDaoMongo extends ContenedorMongo{
    constructor(){
        super ('productos',{
            title:{type:String,required:true},
            price:{type:Number,required:true},
            category:{type:String,required:false},
            image:{type:String,required:true},
            description:{type:String,required:true},
            stock:{type:Number,required:true}
        })
    }
}

module.exports= ProductosDaoMongo