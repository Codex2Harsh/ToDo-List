import style from "./AddTodo.module.css"
function AddTodo() {
  return <div className="container text-center">
    <div className="row newRow">
      <div className="col-6">
        <input class={style.inputOrder} type="text" placeholder="Enter the task.." />
      </div>
      <div className="col-4">
        <input class={style.inputOrder} type="date" />
      </div>
      <div className="col-1">
        <button type="button" className="btn btn-success newbutton">Add</button>
      </div>
    </div>
  </div>
}
export default AddTodo;