import css from "./Todoitem.module.css"
import { MdOutlineDeleteOutline } from "react-icons/md";
function Todoitem({todoTask, todoDate, onDeleteClick}) {
  return <div className="container">
    <div className={`row ${css.newRow}`}>
      <div className="col-6">
        {todoTask}
      </div>
      <div className="col-4">
        {todoDate}
      </div>
      <div className="col-2">
        <button type="button" className={`btn btn-danger ${css.newbutton}`}
        onClick={()=>onDeleteClick(todoTask)}><MdOutlineDeleteOutline />
        </button>
      </div>
    </div>
  </div>
}
export default Todoitem
