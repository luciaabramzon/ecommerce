const ContenedorFirebase=require('../../services/ContenedorFirebase')

class ProductosDaoFirebase extends ContenedorFirebase{
  constructor(){
    super('productos') 
  }
}

module.exports= ProductosDaoFirebase
