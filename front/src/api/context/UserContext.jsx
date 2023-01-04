import React, { useState } from "react"

const UserContext = React.createContext([{}, () => {}])

let initialState = {}

const UserProvider = props => {
  const [state, setState] = useState(initialState)
  const [user,setUser]=useState('')
  

  return (
    <UserContext.Provider value={[state, setState]}>
      {props.children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }
