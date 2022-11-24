import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import ShowProducts from './ecommerce/Products';
import AddProducts from './ecommerce/AddProducts';

function App() {
  return (
    <div className="App">
      <ShowProducts/>
      <AddProducts/>
    </div>
  );
}

export default App;
