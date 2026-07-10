import React from 'react'
import NewTask from './NewTask'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' 
    className="h-[55%] w-full flex gap-8 py-5 mt-10 overflow-x-auto overflow-y-hidden px-2">

   {data.tasks.map((elem,idx) => {


     if(elem.active){
      return <AcceptTask  key = {idx} data = {elem} />
     }
      if(elem.newTask){
      return <NewTask key = {idx} data = {elem} />
     }
      if(elem.completed){
      return <CompleteTask key = {idx} data = {elem}  />
     }
      if(elem.failed){
      return <FailedTask key = {idx} data = {elem} />
     }

   })}

</div>
  )
}

export default TaskList
