const {Router, json}=require('express')
const router=Router()
const express=require('express')
const {ProductoDao,CarritoDao}=require('../daos/index')
const User=require('../utils/mongo/user.schema')
const passport=require('passport')

router.use(express.json());
router.use(express.urlencoded({extended: true}));

require('dotenv').config()
const MY_EMAIL_ADDRESS=process.env.MY_EMAIL_ADDRESS
const MY_PHONE=process.env.MY_PHONE

require('../log4js')
const log4js=require('log4js')
const logger=log4js.getLogger()

//productos
const db=new ProductoDao
router.get('/productos', async (req,res)=>{
    const response= await db.getAll()
    res.json(response)
})

router.post('/productos',async (req,res)=>{
    const {title,price,image,description,stock,categoria}=req.body
    const newProduct= await db.save({
        title:title,
        price:price,
        image:image,
        description:description,
        stock:stock,
        categoria:categoria
    })
    res.json('Producto agregado')
})

router.get('/productos/:id',async(req,res)=>{
    const id=req.params.id
    const getById= await db.getById(id)
    res.json(`Encontrado producto id ${id}`)
})

router.get('/:categoria',async(req,res)=>{
    const categoria=req.query.categoria
    console.log(categoria)
    const cat=await db.getByCategoria(categoria)
    res.json(`Los productos encontrados en la categoria mencionada son: ${cat}`)
})

router.put('/productos/:id', async(req,res)=>{
    const {title,price,image,description,stock,categoria}=req.body
    const id=req.params.id
    if(!id){
        res.json('Producto No encontrado')
    } else{
        const newProduct={
            title:title,
            price:price,
            image:image,
            description:description,
            stock:stock,
            categoria:categoria,
        }
        db.updateById(id,newProduct)
        res.json('Acutalizado')
    }

})

router.delete('/productos/:id',async(req,res)=>{
    const id=req.params.id
    const productDelete=db.deleteById(id)
    res.json(`Producto eliminado ${id}`)
})

//carrito
const dbC=new CarritoDao
    router.get('/carrito', async (req,res)=>{
    const response= await dbC.getAll()
    res.json(response)
    })

    router.post('/carrito',async (req,res)=>{
        const {carrito,productos}=req.body
        const newCarrito={
            carrito:carrito,
            time:Date.now(),
            productos:productos
        }
        await dbC.save(newCarrito)
        res.end('Nuevo Carrito guardado')
    })

    router.get('/carrito/:id',async(req,res)=>{
        const id=req.params.id
        const getById= await dbC.getById(id)
        res.json(`Encontrado carrito id ${id}`)
    })

    router.post('/carrito/:id/productos/:id_producto', async(req,res)=>{
        const id=req.params.id
        const id_producto=req.params.id_producto
        const producto=await db.getById(id_producto)
        const newCart=await dbC.getById(id)
         const newCarrito={
                titleProducto:producto.title,
                price:producto.price,
                image:producto.image,
                description:producto.description,
                stock:producto.stock,
                id:id_producto
            }
        newCart.productos.push(newCarrito)
        console.log(newCart)
        const update= await dbC.updateByCartId(id,newCart)
         res.json(`Actualizado carrito ${id}`) 
    })

    router.delete('/carrito/:id',async(req,res)=>{
        const id=req.params.id
        const carritoDelete=dbC.deleteById(id)
        res.json(`Carrito eliminado ${id}`)
    })

    router.delete('/carrito/:id/productos/:id_producto', async(req,res)=>{
        const id=req.params.id
        const id_producto=req.params.id_producto
        const producto=await db.getById(id_producto)
        const newCart=await dbC.getById(id)
        newCart.productos=newCart.productos.filter(prod=>prod.id_productos!==id_producto)
        dbC.updateCart(id,newCart) 
        res.json(`Eliminado producto id ${id_producto} del carrito ${id}`)
    })

    //compra
    const transporter=require('../notificaciones/gmail')
    const client=require('../notificaciones/whatsapp')
    
    router.use(passport.initialize())
    router.use(passport.session())

    router.post('/carrito/:id/comprar/:username',async (req,res)=>{
        const id=req.params.id
        const username=req.params.username
        const newCart=await dbC.getById(id)
        const user=await User.findOne({username})
        const compra={
            to:`${user.username}`,
            from:MY_EMAIL_ADDRESS,
            subject:`Nuevo pedido de: ${user.name}`,
            html:`<h1> Compra realizada! </h1>
                    <h4>Gracias por realizar la siguiente compra: </h4>
                    <p>${JSON.stringify(newCart.productos)}</p>`
        }
        async function compraRealizada(){
            try{
                    const compraCheck=await transporter.sendMail(compra)
                    logger.info('Email enviado')
            }catch(err){
                logger.error(err)
            }
        }
        compraRealizada()
        const whatsappOptions={
            from:'whatsapp:+14155238886',
            to: `whatsapp:${MY_PHONE}`,
            body:`Gracias por realizar la siguiente compra:
            ${JSON.stringify(newCart.productos)}  `,
        }
        
        const smsOptions={
            from:'+1 218 297 8172',
            to: MY_PHONE,
            body:`Hola ${user.name} tu pedido ha sido realizado y ya se encuentra en proceso  `,
        }
        
        
        async function sendWhatsapp(){
            try{
                const info=await client.messages.create(whatsappOptions)
                const info2=await client.messages.create(smsOptions)
                logger.info('Mensaje Enviado')
            }catch(err){
                logger.error(err)
            }
        }
         sendWhatsapp()   
         res.end('Gracias por comprar')
    })


    
module.exports= router