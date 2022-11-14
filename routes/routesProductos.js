/*  const {Router} = require('express')
const Contenedor=require('../contenedores/ContenedorArchivo')
const c=new Contenedor ('../daos/productos/productos.json')
const router=Router()
const productos=require('../daos/productos/productos.json')
const express = require("express");

let admin=true

router.use(express.json());
router.use(express.urlencoded({extended: true}));

router.get('/',(req,res)=>{
    res.render('productos',{
        productos:productos,
        listExists:true,
    })
})

router.get('/:id',(req,res)=>{
    const id=JSON.parse(req.params.id )
    const buscado=c.getById(id)
    if(!c.getById(id)){
        res.end('El ID no se encuentra en nuestro inventario')
    }else{
            res.render('productos',{
            productos:buscado,
            listExists:true,
        })
    }
})


router.post('/',(req,res)=>{
    const {title,price,image,description,stock}=req.body
    if(admin===true && price&&title&&image&&description&&stock){
       const productoNuevo= c.save({price,title,image,description,stock});
       res.json(`Nuevo ID agregado ${productoNuevo}`)
    }
    else if(admin===true && !price||!title||!image||!description ||!stock){
        res.send('Faltan datos')
    }else if(admin===false){
        res.end(`No tiene permisos para realizar esta operacion`)
    }
})

router.put('/:id',(req,res)=>{
    const {title,price,image,description,stock}=req.body
    const id=JSON.parse(req.params.id)
    if(admin===true && title&&price&&image&&description&&stock){
        const _newProduct={
            title:title,
            price:price,
            image:image,
            description:description,
            stock:stock,
            id:id
        }
        c.updateById(id,_newProduct)
        res.send(_newProduct)
    } else if(admin===false){
        res.end(`No tiene permisos para realizar esta operacion`)
    }
})

router.delete('/:id',(req,res)=>{
    const id=req.params.id
    if(admin===true){
        c.deleteById(JSON.parse(id))
        res.json(`Eliminado ID ${id}`)
    }else{
        res.end(`no tiene permisos para realizar esta operacion`)
    }
})



module.exports=router 
 */