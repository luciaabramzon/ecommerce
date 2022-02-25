import { Link } from "react-router-dom"
import '../../Estilos.css'


const Item=({product})=>{
    const {name,price,id,img}= product;
    return <div>
        <Link to={`/item/${id}`}><div className="margin">
        <img src={img} className='imgDom'/>
        <h5 className='styleNombres'>Nombre Producto: {name}</h5>
        <h6 className="stylePrecio" >Precio:$ {price}</h6>
        </div></Link>
        <div> 
        <Link to={`/item/${id}`}><button className="buttonComprar">Ver detalles</button></Link> 
        </div>  
        <hr/>
        </div>
}

export default Item;