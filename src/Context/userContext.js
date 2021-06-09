import React, {useState, createContext} from 'react'

export const userContext = createContext();

export const UserInfo = (props) =>{
    const [login, setLogin] = useState(false)
    const [username, setUsername] = useState('')

    


    return(
        <userContext.Provider value={[login, setLogin],[username, setUsername]} >
            {props.children}
        </userContext.Provider>
    )
}