import React, { useState } from 'react'

const Login = ({handleState}) => {
  
const [email , setEmail] = useState('')
const [password , setPassword] = useState('')

const sumbitHandler = (e)=>{
  e.preventDefault() 
console.log('form Submitted');
 handleState(email,password)
setEmail('')
setPassword('')

}

  return (
<div className='min-h-screen flex items-center justify-center bg-black'>

  <div className='p-8 rounded-2xl border border-emerald-500 bg-zinc-900 shadow-2xl shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-300'>

    <h1 className='text-3xl font-bold text-center text-emerald-400 mb-8 tracking-wide'>
      Employee Management
    </h1>

    <form 
    onSubmit={(e)=>{
      sumbitHandler(e)
    }}
    className='flex flex-col gap-5'>

      <input
        type='email'
        placeholder='Enter Email'
        value={email}
        onChange={(e)=>{
          setEmail(e.target.value)
        }}
        className='w-full px-4 py-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all'
      />

      <input
        type='password'
        placeholder='Enter Password'
         value={password}
        onChange={(e)=>{
          setPassword(e.target.value)
        }}
        className='w-full px-4 py-3 rounded-lg bg-zinc-800 text-white border border-zinc-700 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all'
      />

      <button
        className='w-full py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-lg shadow-emerald-500/30 transition-all'
      >
        Log In
      </button>

    </form>

  </div>

</div>
  )
}

export default Login