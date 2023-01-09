import { Link } from "react-router-dom"
import { logOut } from "../../api/services"
import { Card, Icon, Image, Button } from 'semantic-ui-react'


const Home=()=>{

    const user=localStorage.getItem('login')
    const userJson=JSON.parse(user)
    console.log(user)

const logout= async e=>{
   const res=await logOut()

    if(res==='ok'){
        alert(`Esperamos volver a verte ${userJson.name}`)
        localStorage.removeItem('login')
        window.location.href='/'
    }
}


    return(
        <>
        <Card>
    <Image src={userJson.avatar} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{userJson.name}</Card.Header>
          </Card.Content>
    <Card.Content>
    <Button animated>
      <Button.Content visible >Log Out</Button.Content>
      <Button.Content onClick={logout}  hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
    <Button animated='vertical'>
     <Link to='/productos'><Button.Content hidden>Shop</Button.Content></Link> 
      <Button.Content visible>
        <Icon name='shop' />
      </Button.Content>
    </Button>
    </Card.Content>
  </Card>
        </>
    )
}

export default Home