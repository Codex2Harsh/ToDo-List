import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import Todoitem from "./components/Todoitem"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import TodoContainer from "./components/TodoContainer";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import AddTaskMessage from "./components/AddTaskMessage";
function App() {
 let task =[
  {
   todoDate: "24/4/25",
   todoTask: "Buy Milk"
  },
  {
   todoDate: "24/4/25",
   todoTask: "Go to College"
  },
]
  let [todoItems, setTodoItems] = useState(task);
  
  let onAddPress = (todoTask,todoDate)=>{
    console.log(`task is: ${todoTask} and date is: ${todoDate}`);
    let newData = [...todoItems,{todoTask: todoTask, todoDate:todoDate}];
    setTodoItems(newData);
  }

  let handleDelete =(itemName) =>{
    console.log(`item deleted: ${itemName}`)
    let deletedItems = todoItems.filter((item)=> item.todoTask != itemName);
    setTodoItems(deletedItems);
  }

  return <center className="todo-container">
    <AppName />
      <AddTodo  onAddPress={onAddPress}/>
      {todoItems.length === 0 ? <WelcomeMessage /> : <AddTaskMessage />}
    <TodoContainer items = {todoItems} onDeleteClick={handleDelete}/>
  </center>
}

export default App
