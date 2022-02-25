import React, { useState, useEffect }from 'react';
import { useProducts } from '../helpers/useProducts';
import SpinnerBs from '../icon/spinnerBootstrap';
import ItemList from './ItemList';
import '../Estilos.css'

function ItemListContainer() {
    const [loading,setLoading]=useState(true) 
    const {products}= useProducts ()

    useEffect(()=>{
        setTimeout(()=>{
        setLoading(false)
        },2000)
    },[]) 


  return <div>
      <h1 className='tituloStyle'>Mi Tienda Saludable</h1>
      <p className='styleParrafo'>Aqui encontraras productos deliciosos y saludables para cualquier hora del dia</p>
  <h3 className='styleSubtitulo'>Productos destacados</h3>
        {
        loading ? <SpinnerBs/> : <ItemList />
        } 
    </div>;
}

export default ItemListContainer;
