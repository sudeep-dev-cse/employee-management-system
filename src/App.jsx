import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {

 const [user,setUser] = useState(null)
  const [userData,setUserData] = useContext(AuthContext)

  const [loggedInUserData, setLoggedInUserData] = useState(null)

    useEffect(()=>{
        
          const LoggedInUser = localStorage.getItem('LoggedInUser')
        if(LoggedInUser){
          const user = JSON.parse(LoggedInUser)
          setUser(user.role)
          setLoggedInUserData(user.data)
        }
      }
    ,[])

 const handleState = (email,password)=>{
     
  //ADMIN
  if(email == 'admin@me.com' && password == '123'){
    setUser('admin')
  localStorage.setItem('LoggedInUser',JSON.stringify({role:'admin'}))
}
//EMPLOYEES
  else if (userData?.employees){
    const employees =  userData.employees.find((e)=>email == e.email && e.password == password )
    if(employees){
    setUser('employees')
    setLoggedInUserData(employees)
   localStorage.setItem('LoggedInUser',JSON.stringify({
    role: 'employees',
    data: employees
  })
)
    }
  }

  else {
    alert('Invalid Credintials');
  }
   
 }


 

  return (
    <>
    
    {!user ? <Login  handleState = {handleState} /> :''}

    {user == 'admin' ? <AdminDashboard  changeUser = {setUser} />:(user =="employees" ? <EmployeeDashboard  changeUser = {setUser}  data = {loggedInUserData} /> : null) }
   
    </>
  )
}

export default App
