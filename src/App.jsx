import { useState,useEffect,useContext} from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'

import './App.css'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utills/localstorage'
import { AuthContext } from './context/AuthProvider'

function App() {
  // useEffect(() => {
  //   // setLocalStorage();
  //   getLocalStorage();
  // }, )
  const [user, setUser] = useState(null)
  const authdata = useContext(AuthContext)//context leliya

  useEffect(() => {
   if(authdata){
     const loggedInUser=localStorage.getItem('loggedInUser')
     if(loggedInUser){
      setUser(loggedInUser.role)
     }
   }
  }, [authdata])
  

  
 
  

  const handleLogin=(email,password)=>{
    if(email=='admin@me.com' && password=='123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }
    else if(authdata && authdata.employees.find((e)=>email==e.email && password==e.password)){
      setUser('employee')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
      
    }
    else {
      alert('Invalid Credentials')
    }
  }
 
 
  
  

  return (
    <>
    {!user? <Login handleLogin={handleLogin}/>: " "}{/*agar user nhi ha to login nahi to khali */}
    {user=='admin'? <AdminDashboard/>:<EmployeeDashboard/>} {/*if admin ha to admindashboard agar user to employeedashboard */}
    
    </>
  )
}

export default App
