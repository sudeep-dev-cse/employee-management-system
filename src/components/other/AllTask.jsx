import React, { useContext } from 'react'
import AuthProvider, { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

const [userData,setUserData] = useContext(AuthContext)

  
  return (
 
  <div className="mt-10 bg-[#161b22] rounded-3xl shadow-2xl border border-gray-800 overflow-hidden">

    {/* Heading */}
    <div className="px-8 py-5 border-b border-gray-800">
      <h2 className="text-2xl font-bold text-white">
        Employee Task Overview
      </h2>
      
    </div>

    {/* Table Header */}
    <div className="grid grid-cols-5 px-8 py-4 bg-[#1f2937] text-gray-300 font-semibold uppercase tracking-wider text-sm">
      <h3>Employee</h3>
      <h3 className="text-blue-400">Active</h3>
      <h3 className="text-yellow-400">New</h3>
      <h3 className="text-green-400">Completed</h3>
      <h3 className="text-red-400">Failed</h3>
    </div>

    {/* Employee Rows */}
    <div className="max-h-[450px] overflow-y-auto">

      {userData?.employees?.map((elem, idx) => (
        <div
          key={idx}
          className="grid grid-cols-5 items-center px-8 py-5 border-b border-gray-800 hover:bg-[#1b2430] transition-all duration-300"
        >
          {/* Name */}
          <h2 className="font-semibold text-lg text-white">
            {elem.name}
          </h2>

          {/* Active */}
          <span className="w-fit px-4 py-1 rounded-full bg-blue-500/20 text-blue-400 font-semibold">
            {elem.taskCount.active}
          </span>

          {/* New */}
          <span className="w-fit px-4 py-1 rounded-full bg-yellow-500/20 text-yellow-400 font-semibold">
            {elem.taskCount.newTask}
          </span>

          {/* Completed */}
          <span className="w-fit px-4 py-1 rounded-full bg-green-500/20 text-green-400 font-semibold">
            {elem.taskCount.completed}
          </span>

          {/* Failed */}
          <span className="w-fit px-4 py-1 rounded-full bg-red-500/20 text-red-400 font-semibold">
            {elem.taskCount.failed}
          </span>
        </div>
      ))}

    </div>

  </div>
)
}

export default AllTask