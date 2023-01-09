import React, { useState } from "react"
import { Link } from "react-router-dom"
import { signUp } from "../../api/services"
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

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
    const user=JSON.stringify(res)
    localStorage.setItem('login',user)
    if(res==='<h1>Error</h1>'){
      alert('El usuario ya se encuentra registrado, por favor inicie sesion')
      window.location.href='/'
    }else{
      window.location.href='/home'
    }
  }

  return (
    <>
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        Register
      </Header>
      <Form size='large' onSubmit={register} >
        <Segment stacked>
          <Form.Input 
          id="firstName"
          placeholder="First Name"
          onChange={e => setName(e.target.value)}
          value={name}
          fluid 
          icon='user' 
          iconPosition='left' 
          />
          <Form.Input
           id="address"
           placeholder="address"
           onChange={e => setAddress(e.target.value)}
           value={address}
            fluid
            icon='address'
            iconPosition='left'
            type='address'
          />
            <Form.Input
           id="age"
           placeholder="age"
           type='number'
           onChange={e => setAge(e.target.value)}
           value={age}
            icon='user'
            iconPosition='left'
          />
          <Form.Input
            id="tel"
            placeholder="tel"
            onChange={e => setTel(e.target.value)}
            value={tel}
            icon='tel'
            iconPosition='left'
          />
            <Form.Input
            id="avatar"
            placeholder="avatar"
            onChange={e => setAvatar(e.target.value)}
            value={avatar}
            icon='user'
            iconPosition='left'
          />
           <Form.Input
            id="username"
            type="email"
            placeholder="user"
            onChange={e => setUsername(e.target.value)}
            value={username}
            icon='user'
            iconPosition='left'
          />
           <Form.Input
            id="password"
            placeholder="Password"
            type="password"
            onChange={e => setPassword(e.target.value)}
            value={password}
            icon='lock'
            iconPosition='left'
          />


          <Button color='teal' fluid size='large'>
            Register
          </Button>
        </Segment>
      </Form>
      <Message>
        Ya se encuentra registrado?<Link to='/'><a>Login</a></Link>
      </Message>
    </Grid.Column>
  </Grid>

    </>
  )
}

export default Register
