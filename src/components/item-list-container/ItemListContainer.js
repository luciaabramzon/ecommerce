import React, { useState, useEffect }from 'react';
import { Task } from '../helpers/promise';
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

    const [selectedItem,setSelectedItem]= useState(null);
    const [counter,setCounter]=useState(1)
    const [products,setProducts]= useState([])
    const [loading,setLoading]=useState(true)

    const getProducts= async () => {
        try{
            const result= await Task;
            setProducts(result)
        } catch (error){
            console.log(error)
        }finally{
            setLoading(false); 
            console.log("final")
        }
    }

    useEffect(()=>{
        getProducts()
    },[])


  return <div>
      <h1 style={tituloStyle}>Mi Tienda Saludable</h1>
      <p style={styleParrafo}>Aqui encontraras productos deliciosos y saludables para cualquier hora del dia</p>
  <h3 style={styleSubtitulo}>Productos destacados</h3>
  {
        loading ? <SpinnerBs/> :   <ItemList productos={products}  setSelectedItem={setSelectedItem}/>
        
        }

   <h5 style={styleSubtitulo}>Productos seleccionados:</h5>
   <p style={styleParrafo} >{selectedItem && selectedItem.name}</p>
   <p style={styleParrafo}>{selectedItem && selectedItem.description}</p>
   <p style={styleParrafo}>{selectedItem && selectedItem.price}</p>
    <button onClick ={()=>setSelectedItem(!selectedItem) }>x</button>
   </div>;
}

export default ItemListContainer;
