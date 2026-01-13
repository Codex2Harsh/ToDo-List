import css from "./Todoitem.module.css"
function Todoitem({todoTask, todoDate}) {
  return <div className="container">
    <div className={`row ${css.newRow}`}>
      <div className="col-6">
        {todoTask}
      </div>
      <div className="col-4">
        {todoDate}
      </div>
      <div className="col-2">
        <button type="button" className={`btn btn-danger ${css.newbutton}`}>Delete
        </button>
      </div>
    </div>
  </div>
}
export default Todoitem