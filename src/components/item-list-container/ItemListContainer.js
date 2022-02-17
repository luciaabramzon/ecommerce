import React, { useState, useEffect }from 'react';
import { Link } from 'react-router-dom';
import { useProducts } from '../helpers/useProducts';
import SpinnerBs from '../icon/spinnerBootstrap';
import ItemList from './ItemList';


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



function ItemListContainer() {
/*     const [counter,setCounter]=useState(1) */
    const [loading,setLoading]=useState(true) 
    const {products}= useProducts ()

    useEffect(()=>{
        setTimeout(()=>{
        setLoading(false)
        },2000)
    },[])

  return <div>
      <h1 style={tituloStyle}>Mi Tienda Saludable</h1>
      <p style={styleParrafo}>Aqui encontraras productos deliciosos y saludables para cualquier hora del dia</p>
  <h3 style={styleSubtitulo}>Productos destacados</h3>
        {
        loading ? <SpinnerBs/> : <ItemList productos={products}/>
        } 
          

   </div>;
}

export default ItemListContainer;
