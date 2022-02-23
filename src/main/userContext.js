import React, { useState, useContext, useMemo } from 'react';

const UserContext = React.createContext()
const UserUpdateContext = React.createContext()

export function useUser() {
    return useContext(UserContext)
}

export function useUserUpdate() {
    return useContext(UserUpdateContext)
}

export function UserProvider({ children }) {
    const [user, setUser] = useState("")
    
    function changeUser(newUser) {
        setUser(newUser)
    }
    
    // const providerValue = useMemo(() => ({user, setUser}), [user, setUser])
    // console.log(user)

    return (

        <UserContext.Provider value={user}>
            <UserUpdateContext.Provider value={changeUser}>
                {children}
            </UserUpdateContext.Provider>
        </UserContext.Provider>
    )
}

