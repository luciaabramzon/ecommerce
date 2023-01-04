import { Link } from "react-router-dom"


const Home=()=>{

 const user=localStorage.getItem('login')
    const userJson=JSON.parse(user)
    return(
        <>
        <h1>Home</h1>
        <h4>Bienvenido {userJson.name}!</h4>
        <Link to='/productos'><button>Ver productos </button></Link>
        </>
    )
}

export default Home