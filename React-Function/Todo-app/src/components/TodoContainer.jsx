import Todoitem from "./Todoitem";
import css from "./TodoConatainer.module.css";
let TodoContainer = ({items})=>{
    return (
    <div key={items} className={css.itemsContainer}>
      {items.map((item)=>(
        <Todoitem todoDate={item.todoDate} todoTask={item.todoTask} />
      ))}
    </div>
    );
};
export default TodoContainer;