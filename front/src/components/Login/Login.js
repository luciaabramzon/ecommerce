import React, {  useContext, useState } from "react"
import { login } from "../../api/services"
import { Link } from "react-router-dom"
import { UserContext } from "../../api/context/UserContext"


const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const {userSession,setSession}=useContext(UserContext)

  const formSubmitHandler = async (e) => {
    e.preventDefault()
    if (username === "" || password === "") {
        alert("Todos los campos son obligatorios");
        return;
      }
      const res=await login({username,password})

      if(res==='<h1>Error</h1>'){
        alert('Usuario no encontrado o contraseña incorrecta')
        window.location.href='/register'
      
      }else{
        alert('bienvenido')
        const user=JSON.stringify(res)
        localStorage.setItem('login',user)
        window.location.href='/home'
      }
  }

  return (
    <>
    <h1>Bienvenido</h1>
    <h3>Ingrese su usuario y contraseña</h3>
       <form onSubmit={formSubmitHandler} >
        <label labelFor="username">
          <input
            id="username"
            placeholder="Email"
            type="user"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </label>
        <label  labelFor="password">
          <input
            id="password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </label>
        <button
          type="submit"
        >Login </button>
      </form>
      <h3>Si aun no esta registrado puede hacerlo en el siguiente enlace</h3>
      <Link to='/register'>Registro</Link>
    </>
  )
}

export default Login

