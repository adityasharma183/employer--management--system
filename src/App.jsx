import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/AuthProvider';
import { setLocalStorage } from './utils/localstorage';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, SetUserData] = useContext(AuthContext);

  useEffect(() => {
    // Initialize data
    setLocalStorage();

    // Try to restore session from localStorage
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      try {
        const parsedUser = JSON.parse(loggedInUser);
        if (parsedUser.role === 'admin') {
          setUser('admin');
        } else if (parsedUser.role === 'employee') {
          setUser('employee');
          setLoggedInUserData(parsedUser.data);
        }
      } catch (err) {
        console.error('Error parsing loggedInUser from localStorage:', err);
      }
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
    } else if (userData) {
      const employee = userData.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem(
          'loggedInUser',
          JSON.stringify({ role: 'employee', data: employee })
        );
      } else {
        alert('Invalid employee credentials');
      }
    } else {
      alert('Invalid credentials');
    }
  };

  const changeUser = () => {
    setUser(null);
    setLoggedInUserData(null);
    localStorage.removeItem('loggedInUser');
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === 'admin' && <AdminDashboard changeUser={changeUser} />}
      {user === 'employee' && (
        <EmployeeDashboard changeUser={changeUser} data={loggedInUserData} />
      )}
    </>
  );
};

export default App;

// import { useState, useEffect, useContext } from 'react';
// import Login from './components/Auth/Login';
// import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
// import AdminDashboard from './components/Dashboard/AdminDashboard';
// import { AuthContext } from './context/AuthProvider';
// import './App.css';

// function App() {
//   const { employees, admin } = useContext(AuthContext);
//   const [user, setUser] = useState(null); // "admin" or "employee"
//   const [loggedUserData, setLoggedUserData] = useState(null); // actual employee data

//   // Auto-login if user is already stored in localStorage
//   useEffect(() => {
//     const stored = JSON.parse(localStorage.getItem('loggedInUser'));
//     if (stored) {
//       setUser(stored.role);
//       if (stored.role === 'employee') {
//         const emp = employees?.find((e) => e.id === stored.id);
//         if (emp) {
//           setLoggedUserData(emp);
//         }
//       }
//     }
//   }, [employees]);

//   const handleLogin = (email, password) => {
//     // Admin check
//     if (email === 'admin@example.com' && password === '123') {
//       setUser('admin');
//       localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
//       return;
//     }

//     // Employee check
//     const employee = employees?.find(
//       (e) => e.email === email && e.password === password
//     );

//     if (employee) {
//       setUser('employee');
//       setLoggedUserData(employee);
//       localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', id: employee.id }));
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   return (
//     <>
//       {!user && <Login handleLogin={handleLogin} />}
//       {user === 'admin' && <AdminDashboard />}
//       {user === 'employee' && loggedUserData && <EmployeeDashboard data={loggedUserData} />}
//     </>
//   );
// }

// export default App;

// import { useState,useEffect,useContext} from 'react'
// import Login from './components/Auth/Login'
// import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'

// import './App.css'
// import AdminDashboard from './components/Dashboard/AdminDashboard'
// import { getLocalStorage, setLocalStorage } from './utills/localstorage'
// import { AuthContext } from './context/AuthProvider'


// function App() {
//   useEffect(() => {
//      setLocalStorage();
//     //getLocalStorage();
//   }, )
//   const [user, setUser] = useState(null)
//   const [loggedUserData, setLoggedUserData] = useState(null)
//   const authdata = useContext(AuthContext)//context leliya

//   // useEffect(() => {
//   //  if(authdata){
//   //    const loggedInUser=localStorage.getItem('loggedInUser')
//   //    if(loggedInUser){
//   //     setUser(loggedInUser.role)
//   //    }
//   //  }
//   // }, [authdata])
  

  
 
  

//   const handleLogin=(email,password)=>{
//     if(email=='admin@me.com' && password=='123'){
//       setUser('admin')
//       localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
//     }
//     else if(authdata){
//       const employee=authdata.employees.find((e)=>email==e.email && password==e.password);
//       if(employee){
//         setUser('employee')
//         setLoggedUserData('employee')
//       }
//       localStorage.setItem('loggedInUser',JSON.stringify({role:'employee'}))
      
//     }
//     else {
//       alert('Invalid Credentials')
//     }
//   }
 
 
  
  

//   return (
//     <>
//     {!user? <Login handleLogin={handleLogin}/>: " "}{/*agar user nhi ha to login nahi to khali */}
//     {user=='admin'? <AdminDashboard/>:(user=='employee'?<EmployeeDashboard data={loggedUserData} />:null)} {/*if admin ha to admindashboard agar user to employeedashboard */}
    
//     </>
//   )
// }

// export default App
