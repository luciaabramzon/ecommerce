import React, { useState }from 'react';

import Item from './Item/Item';
import chocotorta from '../../components/images/chocotortapng.png'
import trufas from '../images/trufas.jpg'

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
    {id:"1", nombre: "Chocotorta", precio:"150",stock:"8",img:{chocotorta}},
    {id:"2", nombre: "Trufas", precio:"50",stock:"12",img:{trufas}},
    {id:"3", nombre: "Scons", precio:"75",stock:"19"},
    {id:"4", nombre: "CarrotCake", precio:"170",stock:"2"},
    {id:"5", nombre: "Lemon Pie", precio:"150",stock:"5"},

]

function ItemListContainer() {
    const [selectedItem,setSelectedItem]= useState(null);
    const [counter,setCounter]=useState(1)

  return <div>
      <h1 style={tituloStyle}>Mi Tienda Saludable</h1>
      <p style={styleParrafo}>Aqui encontraras productos deliciosos y saludables para cualquier hora del dia</p>
  <h3 style={styleSubtitulo}>Productos destacados</h3>
 
  {productos.map(({id,nombre,precio,img,stock}) => (
       <Item
        key={id}
        id={id}
        nombre ={nombre}
        precio={precio}
        img={img}
        stock={stock}
        setSelectedItem={setSelectedItem}
        setCounter={setCounter}/>
   ))}

     
   <h5 style={styleSubtitulo}>Productos seleccionados:</h5>
   <p style={styleParrafo}>{selectedItem ? selectedItem.nombre: "ninguno"}</p>
    <button onClick ={()=>setSelectedItem(!selectedItem)}>x</button>
   </div>;
}

export default ItemListContainer;
