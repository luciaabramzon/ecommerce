const dotenv =require ('dotenv')
dotenv.config()

let ProductoDao
let CarritoDao

switch (process.env.DATABASE){
    case  'firebase':
        const  ProductosDaoFirebase =  require('../utils/firebase/productoFirebase')
        const CarritoDaoFirebase= require('../utils/firebase/carritoFirebase')
       ProductoDao=ProductosDaoFirebase
       CarritoDao=CarritoDaoFirebase
    break;
    case 'mongo':{
        const  ProductosDaoMongo =  require('../utils/mongo/productosMongo')
        const CarritoDaoMongo= require('../utils/mongo/carritoMongo')
       ProductoDao=ProductosDaoMongo
       CarritoDao=CarritoDaoMongo
       break;
    }
}

module.exports= {
    ProductoDao,
    CarritoDao}

