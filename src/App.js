import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar"

const appStyle={
  height:100,
  width:300,
  backgroundColor: "pink",
}


function App() {
  return (
    <div className="App">
    <NavBar/>
   <div>Mi tienda saludable</div> 
   </div>
  );
}

export default App;
