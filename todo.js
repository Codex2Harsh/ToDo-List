let todoList= [];
displayItems();

function addTask(){
    let inputElement = document.querySelector('#todo-input');
    todoList.push(inputElement.value);
    inputElement.value='';
    displayItems();
}
function displayItems(){
    let display = document.querySelector('#items');
    display.innerText = '';
    for(let i=0; i<todoList.length; i++){
        display.innerText += "\n" + todoList[i];
    }
}