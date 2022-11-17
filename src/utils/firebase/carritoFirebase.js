const ContenedorFirebase= require('../../services/ContenedorFirebase')

class CarritoDaosFirebase extends ContenedorFirebase{
    constructor(){
        super('carrito')
    }
}

module.exports=CarritoDaosFirebase