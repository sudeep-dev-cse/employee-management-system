import React from 'react'

const NewTask = ({data}) => {
  
  const submitted = (e)=>{
   ` console.log('task Accepted');`
    
  }
  return (
   
    <div className="shrink-0 w-[320px] h-full bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 rounded-3xl p-6 shadow-2xl hover:scale-[1.03] hover:shadow-red-500/40 transition-all duration-300 text-white">
    <div className='flex justify-between item-center'>
        <h3 className='bg-black/20 backdrop-blur-sm text-xs font-semibold px-4 py-1 rounded-full border border-white/20'>{data.category}</h3>
        <h4 className='text-sm font-medium text-white/80'>{data.taskDate}</h4>
        
    </div>
    <h2 className='mt-5 text-2xl font-bold tracking-wide'>{data.taskTitle}</h2>
    <p className='text-sm mt-3 leading-relaxed text-white/90'>
     {data.taskDescription}
    </p>
     <div className="mt-8 flex gap-3">
  <button
  onClick={(e)=>{
    submitted(e)
  }
  }
  className="flex-1 py-3 rounded-xl bg-green-500 hover:bg-green-600 transition-all duration-300 text-white font-semibold shadow-lg hover:shadow-green-500/40 hover:scale-105">
    ✓ Accept
  </button>

  <button className="flex-1 py-3 rounded-xl bg-red-500 hover:bg-red-600 transition-all duration-300 text-white font-semibold shadow-lg hover:shadow-red-500/40 hover:scale-105">
    ✕ Failed
  </button>
</div>

  </div>

  
  )
}

export default NewTask
