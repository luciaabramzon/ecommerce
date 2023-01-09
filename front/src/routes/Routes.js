import { BrowserRouter,Routes,Route } from "react-router-dom"
import ShowCarts from "../components/Cart/ShowCarts"
import AddProducts from "../components/Products/AddProducts"
import Dashboard from "../components/Dashboard"
import ShowProducts from "../components/Products/ShowProducts"
import Login from "../components/Login/Login"
import Home from "../components/Login/Home"
import Register from "../components/Login/Register"

const Rout=()=>{
    return(
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/productos'element={<ShowProducts/>}/>
        <Route path='/addProduct' element={<AddProducts/>}/>
        <Route path='/carrito' element={<ShowCarts/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Rout