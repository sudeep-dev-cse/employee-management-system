import React from 'react'

const CompleteTask = ({data}) => {
  return (
     
       <div className="shrink-0 w-[320px] h-full bg-gradient-to-br from-green-500 via-green-600 to-green-800 rounded-3xl p-6 shadow-2xl hover:scale-[1.03] hover:shadow-red-500/40 transition-all duration-300 text-white">
    <div className='flex justify-between item-center'>
        <h3 className='bg-black/20 backdrop-blur-sm text-xs font-semibold px-4 py-1 rounded-full border border-white/20'>{data.category}</h3>
        <h4 className='text-sm font-medium text-white/80'>{data.taskDate}</h4>
        
    </div>
    <h2 className='mt-5 text-2xl font-bold tracking-wide'>{data.taskTitle}</h2>
    <p className='text-sm mt-3 leading-relaxed text-white/90'>
      {data.taskDescription}
    </p>
    <div className="mt-8">
  <button className="w-full py-3 rounded-xl bg-white text-green-700 font-bold text-lg shadow-lg hover:bg-green-100 transition-all duration-300 hover:scale-105">
    ✓ Completed
  </button>
</div>
      

  </div>
  
 
    
  )
}

export default CompleteTask
