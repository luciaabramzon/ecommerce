import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar"
import ItemListContainer from './components/item-list-container/ItemListContainer';



const appStyle={
  height:100,
  width:300,
  backgroundColor: "pink",
}


function App() {
  return (
    <div className="App">
    <NavBar/>
   <ItemListContainer/> 

   </div>
  );
}

export default App;
