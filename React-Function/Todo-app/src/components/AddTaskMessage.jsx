import style from "./AddTaskMessage.module.css";
const AddTaskMessage = ({todoItems})=>{
 return todoItems.length >0 && <p className={style.message} >Start completing the Tasks.</p>
}
export default AddTaskMessage;