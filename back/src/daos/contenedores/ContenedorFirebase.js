const firebase=require('firebase-admin')
const serviceAccount=require("../../config")

firebase.initializeApp({
    credential:firebase.credential.cert(serviceAccount.firebaseConnection),
    databaseURL:"https://ecommerce-backend-a6bdd.firebaseio.com"
})

const db=firebase.firestore()

class ContenedorFirebase {
    constructor(colleccion) {
      this.colleccion=db.collection(colleccion)
    }

    async getAll() {
      const querySnapshot= await this.colleccion.get()
      const docs=querySnapshot.docs
      const result=docs.map(doc=>{
        return{
          id:doc.id,
          title:doc.data().title,
          price:doc.data().price,
          description:doc.data().description,
          image:doc.data().image,
        }
      })
      return result
    }

    async getById (id) {
      const doc=await this.colleccion.doc(id).get()
      const data=doc.data()
      return {...data,id}
    }
    
    async save(object) {
      const doc=  this.colleccion.doc()
      const result= await doc.create(object)
      return this.colleccion.doc().get()
    }

    async deleteById(id) {
      const doc=this.colleccion.doc(id)
      const result= await doc.delete()
      return result
    }

    async updateById(id, object) {
      const doc=this.colleccion.doc(id)
      const _newProduct=await doc.update(object)
      return _newProduct
    }
    async updateByCartId(id, object) {
      const doc=this.colleccion.doc(id)
      const _newProduct=await doc.update(object)
      return _newProduct
    }

    
  }
module.exports = ContenedorFirebase

