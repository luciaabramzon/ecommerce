import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar"
import ItemListContainer from './components/item-list-container/ItemListContainer';
import Rout from './components/routes/Rout';
import CartProvider from './components/cart/CartContext';



const appStyle={
  height:100,
  width:300,
  backgroundColor: "pink",
}


function App() {
  return (
    <div className="App">
   <CartProvider>
   <Rout/>
   </CartProvider>
   </div>
  );
}

export default App;
