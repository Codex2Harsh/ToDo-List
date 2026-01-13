import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import Todoitem from "./components/Todoitem"
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
import TodoContainer from "./components/TodoContainer";
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

  return <center className="todo-container">
    <AppName />
      <AddTodo />
    <TodoContainer items = {task}/>
  </center>
}

export default App
