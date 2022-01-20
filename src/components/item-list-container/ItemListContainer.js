import React, { useState } from 'react';
import Item from './Item/Item';

const tituloStyle={
    color: "#F2BEA2",
    marginTop:15,
    fontSize:50,
}

const styleParrafo = {
    color:"#AD7E47",
    fontSize:20,
    fontFamily:"Montserrat",
    marginTop:20
}

const styleSubtitulo={
    color:"#AD7E47",
    fontSize:30,
    fontFamily:"Montserrat",
    marginTop:25,
    fontWeight:"bold"
}


const productos = [
    {id:"1", nombre: "Chocotorta", precio:"150"},
    {id:"2", nombre: "Trufas", precio:"50"},
    {id:"3", nombre: "Scons", precio:"75"},
    {id:"4", nombre: "CarrotCake", precio:"170"},
    {id:"5", nombre: "Lemon Pie", precio:"150"},

]

function ItemListContainer() {
    const [selectedItem,setSelectedItem]= useState(null)

  return <div>
      <h1 style={tituloStyle}>Mi Tienda Saludable</h1>
      <p style={styleParrafo}>Aqui encontraras productos deliciosos y saludables para cualquier hora del dia</p>
  <h3 style={styleSubtitulo}>Productos destacados</h3>

  {productos.map(({id,nombre,precio}) => (
       <Item
        key={id}
        id={id}
        nombre ={nombre}
        precio={precio}
         setSelectedItem={setSelectedItem}/>
   ))}

   <h5 style={styleSubtitulo}>Productos seleccionados:</h5>
   <p style={styleParrafo}>{selectedItem ? selectedItem.nombre: "ninguno"}</p>

  </div>;
}

export default ItemListContainer;
