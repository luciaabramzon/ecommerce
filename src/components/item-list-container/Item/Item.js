import { useState } from "react"
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

const Item=({name,price,id,setSelectedItem,img,stock,description})=>{

    const selectedItem =()=> setSelectedItem({id,name,price,img,stock,description})  ;

    return <div >
        <div style={margin} >
        <img src={img} style={imgDom}/>
        <h5 style={styleNombres}>Nombre Producto: {name}</h5>
        <h6 style={stylePrecio}>Descripcion: {description}</h6>
        <h6 style={stylePrecio}>Precio:$ {price}</h6>
        </div>
        <ItemCounter stock={stock} />
        <div>
        <button style={buttonComprar} onClick={selectedItem}>Seleccionar producto</button> 
        </div>
        <hr/>
        </div>
}

export default Item;