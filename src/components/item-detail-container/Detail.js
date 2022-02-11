import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../cart/CartContext";
import { useProducts } from "../helpers/useProducts"
import ItemCounter from "../item-counter/counter";
import Item from "../item-list-container/Item/Item";
import { ItemCart } from "../item/ItemCart";


const buttonComprar={
    backgroundColor:"#F6E4E1",
    color:"#AD7E47",
    borderRadius:5,
    borderColor:"pink",
}

const styleParrafo = {
    color:"#AD7E47",
    fontSize:20,
    fontFamily:"Montserrat",
    marginTop:20
}

const Detail=()=>{
     
    const {products}= useProducts();
    const {id} = useParams ();
    const [selectedItem,setSelectedItem]=useState(null);
    const {addItem}=useContext(CartContext)
    const [quantity,setQuantity]=useState(0)
    const [show,setShow]=useState(true)
    
    

    const onAdd= (counter)=>{
         /* setShow (false)  */
      
        alert(`Se añadieron ${counter} articulos`)
        console.log(1)
    }
   
    
    useEffect (()=>{
        if(products.length>0){
            const selectedProduct= products.find ((product) => 
            product.id===id)
            
            setSelectedItem (selectedProduct)
            
        }
    },[products])
    
    const handleAddToCart=()=>{
        console.log(quantity)
        addItem({
            item: selectedItem,
            quantity,
        })
        
    }

       
    return (
    <div>
  <ItemCart selectedItem={selectedItem} setQuantity={setQuantity} />
   
  <Link to="/cart"><button onClick={handleAddToCart}>Agregar al carrito</button></Link>
<button onClick ={()=>setSelectedItem(!selectedItem) }>x</button>
  <Link to="/" style={buttonComprar}>Volver</Link>
  </div>
  )
}

export default Detail;