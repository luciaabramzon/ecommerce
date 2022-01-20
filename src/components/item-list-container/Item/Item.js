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

const Item=({nombre,precio,id,setSelectedItem})=>{

    const selectedItem=()=>setSelectedItem({id,nombre,precio})  ;
    return <div >
        <h5 style={styleNombres}>Nombre Producto: {nombre}</h5>
        <h6 style={stylePrecio}>Precio:$ {precio}</h6>
        <button style={buttonComprar} onClick={selectedItem}>Seleccionar producto</button>
        <hr/>
        </div>
}

export default Item;