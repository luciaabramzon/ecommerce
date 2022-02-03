import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar"
import ItemListContainer from './components/item-list-container/ItemListContainer';
import Rout from './components/routes/Rout';



const appStyle={
  height:100,
  width:300,
  backgroundColor: "pink",
}


function App() {
  return (
    <div className="App">
{/*     <NavBar/>
   <ItemListContainer/>  */}
   <Rout/>

   </div>
  );
}

export default App;
