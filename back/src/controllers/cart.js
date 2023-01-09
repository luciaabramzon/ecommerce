const {dbC}=require('./databases')
const transporter=require('../services/notificaciones/gmail')
const client=require('../services/notificaciones/whatsapp')
const User=require('../daos/mongo/user.schema')



require('dotenv').config()
const MY_EMAIL_ADDRESS=process.env.MY_EMAIL_ADDRESS
const MY_PHONE=process.env.MY_PHONE

require('../utils/log4js/log4js')
const log4js=require('log4js')
const { db } = require('../daos/mongo/user.schema')
const { default: mongoose } = require('mongoose')
const logger=log4js.getLogger()

async function getAllCart (req,res){
    try{
        const response= await dbC.getAll()
            res.json(response)
    }catch(err){
        res.send('error')
        logger.error(err)
    }
}

async function addCart(req,res){
    try{
        const {carrito,productos}=req.body
        const newCarrito={
            carrito:'carrito nuevo',
            time:Date.now(),
            productos:productos
        }
        await dbC.save(newCarrito)
        res.send(newCarrito)
    }catch(err){
        logger.error(err)
    }
}


async function getCartById(req,res){
    try{
        const id=req.params.id
        const getById= await dbC.getById(id)
        res.send(getById)
    }catch(err){
        logger.error(err)
    }
}

async function updateCartById(req,res){
    try{
        const id=req.params.id
        const id_producto=req.params.id_producto
         const {db}=require('./databases')
        const producto=await db.getById(id_producto)
        const newCart=await dbC.getById(id)
        const newCarrito={
                titleProducto:producto.title, 
                price:producto.price,
                image:producto.image,
                description:producto.description,
                stock:producto.stock,
                id:id_producto,
                category:category
            }
        newCart.productos.push(newCarrito)
        const update= await dbC.updateByCartId(id,newCart)
         res.json(`Actualizado carrito ${id}`)     
    }catch(err){
        logger.error(err)
    }
}

async function deleteCartById(req,res){
    try{
        const id=req.params.id
        const carritoDelete=dbC.deleteById(id)
        res.json(`Carrito eliminado ${id}`)
    }catch(err){
        logger.error(err)
    }
}

async function deleteCartProductById(req,res){
    try{
        const id=req.params.id
        const id_producto=req.params.id_producto
        const {db}=require('./databases')
        const producto=await db.getById(id_producto)
        const newCart=await dbC.getById(id)
        newCart.productos=newCart.productos.filter(prod=>prod.id!==id_producto)
        dbC.updateCart(id,newCart)
        res.send(newCart)
    }catch(err){
        logger.error(err)
    }

}

async function comprar (req,res){ 
    try{
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
    }catch(err){
        logger.error(err)
    }
    }

module.exports={
    getAllCart,
    addCart,
    getCartById,
    updateCartById,
    deleteCartById,
    deleteCartProductById,
    comprar
}