import React, {  useContext, useState } from "react"
import { login } from "../../api/services"
import { Link } from "react-router-dom"
import { UserContext } from "../../api/context/UserContext"
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'



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
    
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        Log-in to your account
      </Header>
      <Form size='large' onSubmit={formSubmitHandler} >
        <Segment stacked>
          <Form.Input 
          fluid 
          icon='user' 
          iconPosition='left' 
          placeholder='E-mail address'
          id="username"
          type="user"
          value={username}
          onChange={e => setUsername(e.target.value)}
          />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <Button color='teal' fluid size='large'>
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us?<Link to='/register'><a>Registro</a></Link>
      </Message>
    </Grid.Column>
  </Grid>
      
    </>
  )
}

export default Login

