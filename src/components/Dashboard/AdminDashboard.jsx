import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = (props) => {
  
  
  return (
  <div className="min-h-screen w-full p-10 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white">
  <Header changeUser={props.changeUser} />
  <CreateTask  />
  <AllTask />
  
</div>
  )
}

export default AdminDashboard
