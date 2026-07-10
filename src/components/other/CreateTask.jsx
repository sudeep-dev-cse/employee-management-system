import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'


const CreateTask = ({data}) => {

  const [userData,setUserData] = useContext(AuthContext)

const [taskTitle, setTaskTitle] = useState('')
const [taskDate, setTaskDate] = useState('')
const [assignTo, setAssignTo] = useState('')
const [category, setCategory] = useState('')
const [taskDescription, setTaskDescription] = useState('')



  const submitHandler = (e) => {
  e.preventDefault();

  const newTask = {
    taskTitle,
    taskDescription,
    taskDate,
    category,
    active: false,
    failed: false,
    newTask: true,
    completed: false,
  };

  const data = userData.employees;

  data.forEach((elem) => {
    if (assignTo === elem.name) {
      elem.tasks.push(newTask);
      elem.taskCount.newTask += 1;
    }
  });

  setUserData({employees: data});



  setTaskTitle('');
  setTaskDate('');
  setAssignTo('');
  setCategory('');
  setTaskDescription('');
};
     if (!userData) {
      return <h1 className="text-white">Loading...</h1>;
        }

  return (
    <div>

<div>
  <form 
  onSubmit={(e)=>{
   submitHandler(e)
  }}
  
  className="mt-10 max-w-5xl mx-auto bg-gray-800/60 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-gray-700 flex flex-col gap-8">

    {/* Main Sections */}
    <div className="flex flex-col md:flex-row gap-10">

      {/* LEFT SIDE */}
      <div className="md:w-1/2 space-y-6">
        
        <div>
          <label className="text-sm text-gray-300">Task Title</label>
          <input
          value ={taskTitle}
          onChange={(e)=>{
            setTaskTitle(e.target.value)
          }}
            type="text"
            placeholder="Name of task"
            className="mt-2 w-full px-4 py-3 bg-gray-700/70 border border-gray-600 rounded-xl
            focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition"
          />
        </div>

        <div>
          <label className="text-sm text-gray-300">Date</label>
          <input
          value ={taskDate}
          onChange={(e)=>{
            setTaskDate(e.target.value)
          }}
            type="date"
            className="mt-2 w-full px-4 py-3 bg-gray-700/70 border border-gray-600 rounded-xl
            focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition"
          />
        </div>

        <div>
          <label className="text-sm text-gray-300">Assign To</label>
          <input
          value ={assignTo}
          onChange={(e)=>{
            setAssignTo(e.target.value)
          }}
            type="text"
            placeholder="Employee name"
            className="mt-2 w-full px-4 py-3 bg-gray-700/70 border border-gray-600 rounded-xl
            focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition"
          />
        </div>

        <div>
          <label className="text-sm text-gray-300">Category</label>
          <input
          value ={category}
          onChange={(e)=>{
            setCategory(e.target.value)
          }}
            type="text"
            placeholder="Category name"
            className="mt-2 w-full px-4 py-3 bg-gray-700/70 border border-gray-600 rounded-xl
            focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition"
          />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="md:w-1/2 flex flex-col">
        <label className="text-sm text-gray-300 mb-2">Description</label>
        <textarea
        value ={taskDescription}
          onChange={(e)=>{
            setTaskDescription(e.target.value)
          }}
          className="w-full h-full min-h-[280px] px-4 py-3 bg-gray-700/70 border border-gray-600 rounded-xl
          resize-none focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:border-emerald-500 transition"
          placeholder="Write task description..."
        />
      </div>
    </div>

    {/* BUTTON ROW */}
       <div className="mt-8 w-full">
      <button
     
        type="submit"
        className="w-full md:w-auto px-105 py-3 bg-emerald-500 hover:bg-emerald-600
        rounded-xl font-semibold shadow-lg transition"
      >
        Create Task
      </button>
      </div>
  </form>
</div>
    </div>
  )
}

export default CreateTask
