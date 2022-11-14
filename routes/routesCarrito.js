/* const {Router} = require('express')
const router=Router()
const Contenedor=require('../contenedores/ContenedorArchivo')
const c=new Contenedor ('../daos/carrito/carrito.json')
const productos=require('../daos/productos/productos.json')
const carrito=require('../daos/carrito/carrito.json')
const express = require("express");

router.use(express.json());
router.use(express.urlencoded({extended: true}));

router.post('/',(req,res)=>{
    const title=req.body
    const carritoNuevo= c.save(title);
    res.json(`Nuevo ID agregado ${carritoNuevo}`)
})

router.delete('/:id',(req,res)=>{
    const id=req.params.id
        c.deleteById(JSON.parse(id))
        res.json(`Eliminado ID ${id}`)
    })

    router.post('/:id/productos/:id_productos',(req,res)=>{
        const id_productos=JSON.parse(req.params.id_productos)
        const id=JSON.parse(req.params.id)
        const producto=productos.find(c=>c.id===id_productos)
        const cart=carrito.find(c=>c.id===id)
            const _newProduct={
                title:producto.title,
                price:producto.price,
                image:producto.image,
                id_productos:id_productos,
                stock:producto.stock,
                time:Date.now()
            }
            c.agregarProducto(id,_newProduct)
            res.send(_newProduct)
    })

    router.get('/:id/productos',(req,res)=>{
        const id=JSON.parse(req.params.id)
        const buscado=c.getById(id)
        if(!c.getById(id)){
            res.end('El ID no se encuentra en nuestro inventario')
        }else{
            res.json(buscado)
        }
    })

    router.delete('/:id/productos/:id_productos',(req,res)=>{
        const id_productos=JSON.parse(req.params.id_productos)
        const id=JSON.parse(req.params.id)
        c.deleteProductByCartId(id,id_productos)
        res.end('elimiando')
    })
module.exports=router */
