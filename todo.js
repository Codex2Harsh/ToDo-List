//creating an array to contain objects in it
let todoList= [
    {
    item:'Buy Milk', 
    dueDate:'6/1/2025'
    },
    {
    item:'Go to college', 
    dueDate:'6/1/2025'
    }, 
    {
    item:'complete homework',
     dueDate:'6/1/2025'
    }
];
displayItems();

function addTask(){
    let inputElement = document.querySelector('#todo-input');
    let inputDate = document.querySelector('#todo-date');
    todoList.push(
    {
        item:inputElement.value , 
        dueDate:inputDate.value
    });
    inputElement.value='';
    inputDate.value='';
    displayItems();
}

//to display date in correct format
function formatDate(dateStr) {
    let date = new Date(dateStr);
    return date.toLocaleDateString(); // auto formats for user's region
}

function displayItems(){
    let display = document.querySelector('.container-items');
    let newHtml='';
    for(let i=0; i<todoList.length; i++){
        let{item,dueDate}= todoList[i];
        newHtml += `
        <span>${item}</span>
        <span>${formatDate(dueDate)}</span>
        <button class= "delete-btn" onclick="
        todoList.splice(${i},1);
        displayItems(); 
        "> Delete </button>`;
    }
    //after deletion the new items will b shown here
    display.innerHTML = newHtml;
}