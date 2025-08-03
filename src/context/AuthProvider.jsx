import React, { createContext, useEffect, useState } from 'react'
import { setLocalStorage,getLocalStorage } from '../utils/localstorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    //localStorage.clear()
    

    const [userData, setUserData] = useState(null)

    useEffect(() => {
        setLocalStorage()
        const {employees} = getLocalStorage()
        setUserData(employees)
    }, [])
    
    

    return (
        <div>
            <AuthContext.Provider value={[userData,setUserData]}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider