import React, {  useState } from "react"
import { login } from "../../api/services"
import axios, { AxiosError } from "axios"
import Register from "./Register"
import { Link } from "react-router-dom"


const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const URL="http://localhost:8000/login"

  const formSubmitHandler = async (e) => {
    e.preventDefault()
    if (username === "" || password === "") {
        alert("Todos los campos son obligatorios");
        return;
      }
      const res=await login({username,password})
       if(res==='error'){
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

