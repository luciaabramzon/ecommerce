const firebase=require('firebase-admin')
const serviceAccount=require("./key-firebase.json")
const ContenedorFirebase =require('../contenedores/ContenedorFirebase')

firebase.initializeApp({
    credential:firebase.credential.cert(serviceAccount),
    databaseURL:"https://ecommerce-backend-a6bdd.firebaseio.com"
})



const db=firebase.firestore()

/* const productos=new ContenedorFirebase(db.collection('productos'))

const agregar=()=>{
    const nuevo =({
        title: "Gameboy",
        price: 1305,
        image: "https://cdn2.iconfinder.com/data/icons/80-s-stuffs-outline/63/Asset_5-256.png",
        id: 1,
        description: "Juego nintendo individual. Viene sin juegos",
        stock: 2
      })
    productos.save(nuevo)
      console.log(nuevo)
}
 */
