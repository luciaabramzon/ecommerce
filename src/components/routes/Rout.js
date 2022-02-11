import React from 'react';
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import ItemDetail from '../item-detail-container/ItemDetail';
import ItemListContainer from '../item-list-container/ItemListContainer';
import Navbar from '../NavBar';
import NotFound from '../NotFound/NotFound';
import Cart from '../cart/Cart.js'
const Rout = () =>{
    return(
        <BrowserRouter>
        <Navbar/>
        <Switch>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/category/:id" element={<ItemListContainer/>} />
            <Route path="/item/:id" element={<ItemDetail/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkout" element={<ItemListContainer/>} />
            <Route path="/*" element={<NotFound/>} />
        </Switch>
        </BrowserRouter>
    )
}

export default Rout


