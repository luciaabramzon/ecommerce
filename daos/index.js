const dotenv =require ('dotenv')
dotenv.config()

let ProductoDao
let CarritoDao

switch (process.env.DATABASE){
    case  'firebase':
        const  ProductosDaoFirebase =  require('./productos/firebase')
        const CarritoDaoFirebase= require('./carrito/carritoFirebase')
       ProductoDao=ProductosDaoFirebase
       CarritoDao=CarritoDaoFirebase
    break;
    case 'mongo':{
        const  ProductosDaoMongo =  require('./productos/productosMongo')
        const CarritoDaoMongo= require('./carrito/carritoMongo')
       ProductoDao=ProductosDaoMongo
       CarritoDao=CarritoDaoMongo
       break;
    }
}

module.exports= {
    ProductoDao,
    CarritoDao}

