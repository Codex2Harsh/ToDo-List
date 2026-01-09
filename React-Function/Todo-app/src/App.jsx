import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import Todoitem from "./components/Todoitem"
import Todoitem2 from "./components/Todoitem2";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./App.css";
function App() {
  return <center className="todo-container">
    <AppName />
      <AddTodo />
    {/* we can add the items dynamically but for now we are adding them through seperate class. */}
    <div className="items-container">
      <Todoitem />
      <Todoitem2 />
    </div>
  </center>
}

export default App
