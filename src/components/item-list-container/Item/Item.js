import { useState } from "react"
import { Link } from "react-router-dom"
import ItemCounter from "../../item-counter/counter"

const styleNombres={
    color: "#F2BEA2",
    fontSize:20,
}

const stylePrecio={
    color:"#AD7E47",
}

const margin={
    marginBottom:15
}

const buttonComprar={
    backgroundColor:"#F6E4E1",
    color:"#AD7E47",
    borderRadius:5,
    borderColor:"pink",
}

const imgDom={
    height:175,
    width:250
}


const Item=({product})=>{
    const {name,price,id,img,stock,description}= product;
        /*  const [show,setShow]= useState(true) */

     const onAdd= (counter)=>{
         /* setShow (false) */
         alert(`Se compraron ${counter} articulos`)
     }

    return <div>
        <Link to={`/item/${id}`}><div style={margin} >
        <img src={img} style={imgDom}/>
        <h5 style={styleNombres}>Nombre Producto: {name}</h5>
        
        <h6 style={stylePrecio}>Precio:$ {price}</h6>
        </div></Link>
        <div> 
       {/*  { show?   <ItemCounter stock={stock} onAdd={onAdd} />  */}
        <Link style={buttonComprar} to={`/item/${id}`}>Ver detalles</Link> 
        </div>  

        <hr/>
        </div>
}

export default Item;