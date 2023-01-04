import React, { useState } from "react"
import { Link } from "react-router-dom"
import { signUp } from "../../api/services"

const Register = () => {
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [tel,setTel]=useState('')
  const [avatar,setAvatar]=useState('')
  const [age,setAge]=useState('')
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const register=async (e)=>{
    e.preventDefault()
    let res=await signUp({username, password,name,address,tel,avatar,age})
    if(res==='success'){
      window.location.href='/home'
    }else{
      alert('El usuario ya se encuentra registrado, por favor inicie sesion')
      window.location.href='/'
    }
  }

  return (
    <>
    <h1>Bienvenido!</h1>
    <h3>Complete los campos a continuacion para registrarse</h3>
      <form onSubmit={register} className="auth-form">
        <label labelFor="firstName">
          <input
            id="firstName"
            placeholder="First Name"
            onChange={e => setName(e.target.value)}
            value={name}
          />
        </label>
        <br/>
        <label labelFor="address">
          <input
            id="address"
            placeholder="address"
            onChange={e => setAddress(e.target.value)}
            value={address}
          />
          </label>
          <br/>
          <label labelFor="age">
          <input
            id="age"
            placeholder="age"
            type='number'
            onChange={e => setAge(e.target.value)}
            value={age}
          />
          </label>
          <br/>
          <label labelFor="tel">
          <input
            id="tel"
            placeholder="tel"
            onChange={e => setTel(e.target.value)}
            value={tel}
          />
          </label>
          <br/>
          <label  labelFor="avatar">
          <input
            id="avatar"
            placeholder="avatar"
            onChange={e => setAvatar(e.target.value)}
            value={avatar}
          />
        </label>
        <br/>
        <label labelFor="username">
          <input
            id="username"
            type="email"
            placeholder="user"
            onChange={e => setUsername(e.target.value)}
            value={username}
          />
        </label>
        <br/>
        <label labelFor="password">
          <input
            id="password"
            placeholder="Password"
            type="password"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <br/>
        <button intent="primary" type="submit">Register </button>
      </form>
      <Link to='/' setName={name}><h4>Si ya se encuentra registrado por favor dirigase al login</h4></Link>
    </>
  )
}

export default Register
