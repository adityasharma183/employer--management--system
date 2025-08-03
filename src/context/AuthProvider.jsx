import React, { createContext, useEffect } from 'react'
import { getLocalStorage } from '../utills/localstorage';
import { useState } from 'react';


//CREATE CONTEXT
export const AuthContext=createContext();
const AuthProvider = ({children}) => {
    const [userdata, setUserdata] = useState("")
    useEffect(() => {
      const {employees,admin}=getLocalStorage()
      setUserdata({employees,admin})

    }, [])
    
    
    
  return (
    <div>
        <AuthContext.Provider value ={userdata}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider