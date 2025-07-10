"use client"
import { addTask } from "@/Services/taskService";
import { ClientPageRoot } from "next/dist/client/components/client-page";
import React, { useState } from "react";
// export const metadata = {
//     title: "add task"
// };
const Addtask = ()=> {

   const [task,setTask ]=useState({
        title:"",
        content:"",
        status:'none',
        userid:'686656261eb38efe97f352c5'

    })
    const handleAddTask = async(event)=>{
        event.preventDefault();
        console.log(task)
    
    try {
     const result= await addTask(task)
     console.log(result)
        
    } catch (error) {
       console.log(error)
        
    }}
    // console.log('this is component')
    return (
        
        <div className="grid-cols-12 justify-center">
            <div className=" col-span-4 col-start-5 mt-4 p-5 shadow-gray-900 shadow-sm">
                <h1 className="text-3xl">
                    Add task here!
                </h1>
                <form action="#!" onSubmit={handleAddTask}>
                    {/* task title */}
                    <div className="mt-4">
                        <label htmlFor="task _title" className="block text-sm font-medium mb-2">title</label>
                        <input type="text" className="w-full p-2.5 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" id="task_title" name="task_title" 
                        onChange={(event)=>{
                            setTask({
                                ...task,
                                title:event.target.value,

                            })
                        }}/>
                    </div>
                    {/* task content */}
                    <div className="mt-4 ">
                        <label htmlFor="task _content" className="block text-sm font-medium mb-2">content</label>
                        <textarea className="w-full p-2.5 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" id="task_content " rows={5} name="task_content" 
                        onChange={(event)=>{
                            setTask({
                                ...task,
                                content:event.target.value,

                            })
                        }} 
                        value={task.content}/>
                    </div>
                    {/* task status */}
                    <div className="mt-4">
                        <label htmlFor="task_status" className="block">Status</label>
                        <select name="task_status" id="task_status" className="w-full p-2.5 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 "  
                        onChange={(event)=>{
                            setTask({
                                ...task,
                               status:event.target.value,

                            }) 
                        }} value={task.status}>
                            <option value="none" disabled  >---Select Status---</option>
                            <option value="pending">Pending</option>
                            <option value="complete">Complete</option>
                            
                        </select>
                    </div>
                   <div className=" mt-4 flex justify-center">
                    <button className="bg-blue-600 py-2 px3 rounded-lg hover:bg-blue-800">Add Task</button>
                    <button className="bg-red-600 py-2 px3 rounded-lg hover:bg-red-800 ms-3">Clear</button>
                   </div>
                   {JSON.stringify(task)}
                </form>


            </div>
        </div>
    )
}
export default Addtask;