import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useProducts } from "../helpers/useProducts"
import ItemCounter from "../item-counter/counter";
import Item from "../item-list-container/Item/Item";




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


const buttonComprar={
    backgroundColor:"#F6E4E1",
    color:"#AD7E47",
    borderRadius:5,
    borderColor:"pink",
}



const Detail=()=>{
     
    const {products}= useProducts();
    const {id} = useParams ();
    const [selectedItem,setSelectedItem]=useState(null);
    

    const onAdd= (counter)=>{
        /* setShow (false) */
        alert(`Se compraron ${counter} articulos`)
    }
   
    
    useEffect (()=>{
        if(products.length>0){
            const selectedProduct= products.find ((product) => 
            product.id===id)
            
            setSelectedItem (selectedProduct)
            
        }
    },[products])
    
       
    return (
    <div>
      
 <h5 style={styleSubtitulo} >Productos seleccionados:</h5>
    {selectedItem &&  <img src={selectedItem.img}/>}
   <p style={styleParrafo} >{selectedItem && selectedItem.name}</p>
   <p style={styleParrafo}>{selectedItem && selectedItem.description}</p>
   <p style={styleParrafo}>{selectedItem && selectedItem.price}</p> 
   <ItemCounter stock={selectedItem && selectedItem.stock} onAdd={onAdd} />
   <button onClick={onAdd}>Añadir al carrito</button>
   <Link to="/cart"><button>Ver Carrito</button></Link>
{/*    <button onClick ={()=>setSelectedItem(!selectedItem) }>x</button> */} 
   <Link to="/" style={buttonComprar}>Volver</Link>
   </div>
   )
}

export default Detail;