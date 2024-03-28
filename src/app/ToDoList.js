'use client';
import React,{useState} from 'react';
function ToDoList (props) {
    const [task, setTask]=useState("");
    const [taskList, setTaskList]=useState([]);
    
    const addTaskToList= event =>{
        event.preventDefault();
        const updatedTaskList =[...taskList];
        updatedTaskList.push(task);
        setTaskList(updatedTaskList);
        setTask("")
       }
    return (
        <section>
        <h1>{props.heading??"to-do-list"}</h1>
        <form onSubmit ={addTaskToList}>
            <label htmlFor ="new task">
                Enter a new task: 
            
            <input
             id="new task"
             name ="new task"
             type="text"
             onChange ={e=>{setTask(e.target.value)}}
             value ={task}
            required/>
            </label>
            <input type ="submit"
                   id ="submit-task" />
                </form>
            <ul>
              {taskList.map((toDo,index)=><li key={index}>{toDo}</li>)}
            </ul>
        </section>
    )
}

export default ToDoList;