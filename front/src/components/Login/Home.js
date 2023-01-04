import { Link } from "react-router-dom"
import { logOut } from "../../api/services"


const Home=()=>{

    const user=localStorage.getItem('login')
    const userJson=JSON.parse(user)
const logout= async e=>{
   const res=await logOut()
   console.log(res)
    if(res==='ok'){
        alert(`Esperamos volver a verte ${userJson.name}`)
        window.location.href='/'
    }
}


    return(
        <>
        <h1>Home</h1>
        <h4>Bienvenido {userJson.name}!</h4>
        <button onClick={logout}>LogOut</button>
        <Link to='/productos'><button>Ver productos </button></Link>

        </>
    )
}

export default Home