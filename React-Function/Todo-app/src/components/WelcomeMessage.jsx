import style from "./WelcomeMessage.module.css";
const WelcomeMessage = ({todoItems}) =>{
  return todoItems.length === 0 && <p class = {style.message} >No Tasks left.</p>
}
export default WelcomeMessage;