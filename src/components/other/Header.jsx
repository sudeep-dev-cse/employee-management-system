import React from 'react'

const Header = (props) => {

 const logOutUser = ()=>{
 localStorage.setItem('LoggedInUser','')
 props.changeUser('')
 
//  window.location.reload()

 }
  
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gray-900 rounded-xl shadow-lg">
      
      <div>
        <h1 className="text-xl md:text-2xl text-gray-300 font-medium">
          Hi,
        </h1>
        <span className="text-3xl md:text-4xl font-bold text-white">
      Sudeep✋
        </span>
      </div>

      <button
      onClick={logOutUser}
      className="px-5 py-2 bg-red-500 hover:bg-red-600 transition-all duration-300 text-white font-semibold rounded-lg shadow-md">
        Log Out
      </button>

    </header>
  )
}

export default Header