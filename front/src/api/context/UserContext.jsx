import React, { useState } from "react"
import { loginPage } from "../services"

const UserContext = React.createContext([{}, () => {}])

let initialState = {}

const UserProvider = props => {
  const [state, setState] = useState(initialState)
  const [session,setSession]=useState('')

  
  const userSession=async()=>{
    const res=await loginPage()
    console.log(res)
    setSession(res)
  }
  

  return (
    <UserContext.Provider value={[
      state,
      setState,
      session,
      setSession,
      userSession
      ]}>
      {props.children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }
