import style from "./AddTodo.module.css"
import { useRef, useState } from "react";
import { RiAddBoxFill } from "react-icons/ri";
function AddTodo({onAddPress}) {
  
  //dissolving useState using useRef hook
  let todoDates = useRef();
  let todoTasks = useRef();

  // let[todoTask,setTask] = useState("");
  // let[todoDate,setDate] = useState("");
  //initialising to get the update's numbers
  // let numberOfUpdates = useRef(0);

  // let onHandleTask = (event) => {
  // setTask(event.target.value);
  // //to get the number of page reloads
  // numberOfUpdates.current +=1;
  // }
  // let onHandleDate = (event) => {
  // setDate(event.target.value);
  // //to view the number of page reloads
  // console.log(numberOfUpdates.current);
  // }

  let handleAddButton = (event)=>{
    //this prevents the default behaviour of form's submit button.
    event.preventDefault();
    const todoTask = todoTasks.current.value;
    const todoDate = todoDates.current.value;
    todoDates.current.value = "";
    todoTasks.current.value = "";
    onAddPress(todoTask,todoDate);
    // setTask("");
    // setDate("");
  }

  return <div className="container text-center">
    <form className="row newRow"
    onSubmit={handleAddButton}>
      <div className="col-6">
        {/* using useRef */}
        <input className={style.inputOrder} ref={todoTasks} type="text" placeholder="Enter the task.." />
        {/* dissolved useState */}
        {/* <input className={style.inputOrder} type="text" value={todoTask} placeholder="Enter the task.." onChange={onHandleTask}/> */}
      </div>
      <div className="col-4">
        {/* using useRef */}
        <input className={style.inputOrder} ref={todoDates} type="date"/>
        {/* dissolved useState */}
        {/* <input className={style.inputOrder} type="date" value={todoDate}   onChange={onHandleDate}/> */}
      </div>
      <div className="col-1">
        <button type="submit" className="btn btn-success newbutton" ><RiAddBoxFill /></button>
      </div>
    </form>
  </div>
}
export default AddTodo;
