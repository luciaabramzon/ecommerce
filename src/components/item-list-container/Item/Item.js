import { useState } from "react"

const styleNombres={
    color: "#F2BEA2",
    fontSize:20,
}

const stylePrecio={
    color:"#AD7E47",
}


const buttonComprar={
    backgroundColor:"#F6E4E1",
    color:"#AD7E47",
    borderRadius:5,
    borderColor:"pink",
}

const img={
    height:20
}

const Item=({nombre,precio,id,setSelectedItem,img,stock})=>{

    const selectedItem =()=> setSelectedItem({id,nombre,precio,img,stock})  ;
    const [counter,setCounter]=useState(1);

const minusCounter=()=>{
    if (counter<=1) return ;
    setCounter(counter-1)
}

const plusCounter=()=>{
    
    if (counter>=stock) return;
    setCounter(counter+1)
}

    return <div >
        <h5 style={styleNombres}>Nombre Producto: {nombre}</h5>
        <h6 style={stylePrecio}>Precio:$ {precio}</h6>
        <img src={img}/>
        <div>
        <button onClick={minusCounter}>-</button>
        <span > {counter}</span>
        <button onClick={plusCounter}>+</button>
        </div>
        <button style={buttonComprar} onClick={selectedItem}>Seleccionar producto</button>
        <hr/>
        </div>
}

export default Item;