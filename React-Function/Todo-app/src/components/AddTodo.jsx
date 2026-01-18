import style from "./AddTodo.module.css"
import { useState } from "react";
function AddTodo({onAddPress}) {
  
  let[todoTask,setTask] = useState();
  let[todoDate,setDate] = useState();

  let onHandleTask = (event) => {
  setTask(event.target.value);
  }
  
  let onHandleDate = (event) => {
  setDate(event.target.value);
  }

  let handleAddButton = ()=>{
    onAddPress(todoTask,todoDate);
    setTask("");
    setDate("");
  }

  return <div className="container text-center">
    <div className="row newRow">
      <div className="col-6">
        <input class={style.inputOrder} type="text" value={todoTask} placeholder="Enter the task.." onChange={onHandleTask}/>
      </div>
      <div className="col-4">
        <input class={style.inputOrder} type="date" value={todoDate}   onChange={onHandleDate}/>
      </div>
      <div className="col-1">
        <button type="button" className="btn btn-success newbutton" onClick={handleAddButton}
         >Add</button>
      </div>
    </div>
  </div>
}
export default AddTodo;
