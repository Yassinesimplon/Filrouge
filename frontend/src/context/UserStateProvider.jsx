import { createContext, useEffect, useState } from "react";

export const UserStateContext = createContext({})

export const UserStateProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userType, setUserType] = useState("")

    useEffect(() => {
        setIsLoggedIn(localStorage.isLoggedIn)
        setUserType(localStorage.userType)
    }, [])

    return (
        <UserStateContext.Provider value={{isLoggedIn, userType, setIsLoggedIn, setUserType}}>
            {children}
        </UserStateContext.Provider>
    )
}