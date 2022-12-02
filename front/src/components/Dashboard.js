import { Link } from "react-router-dom"

const Dashboard=()=>{
return(
    <>
    <h1>Productos</h1>
    <Link to="/product">Ver productos</Link>
    <br/>
    <Link to='/addProduct'>Agregar Productos</Link>
    <br/>
    <Link to='/carts'>Ver Carritos</Link>
    </>
)
}

export default Dashboard