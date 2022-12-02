import { BrowserRouter,Routes,Route } from "react-router-dom"
import ShowCarts from "../components/Cart/ShowCarts"
import AddProducts from "../components/Products/AddProducts"
import Dashboard from "../components/Dashboard"
import ShowProducts from "../components/Products/ShowProducts"

const Rout=()=>{
    return(
        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/product'element={<ShowProducts/>}/>
        <Route path='/addProduct' element={<AddProducts/>}/>
        <Route path='/carts' element={<ShowCarts/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Rout