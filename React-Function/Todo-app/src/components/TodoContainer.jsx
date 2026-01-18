import Todoitem from "./Todoitem";
import css from "./TodoConatainer.module.css";
let TodoContainer = ({items,onDeleteClick})=>{
    return (
    <div key={items} className={css.itemsContainer}>
      {items.map((item)=>(
        <Todoitem key={item.todoTask} todoDate={item.todoDate} todoTask={item.todoTask} 
        onDeleteClick={onDeleteClick}/>
      ))}
    </div>
    );
};
export default TodoContainer;