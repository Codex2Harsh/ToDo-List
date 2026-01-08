//creating an array to contain objects in it
let todoList= [
    {
    item:'Buy Milk', 
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
    localStorage.setItem('todoList',JSON.stringify(todoList));
    inputElement.value='';
    inputDate.value='';
    displayItems();
}

//to display date in correct format
function formatDate(dateStr) {
    let date = new Date(dateStr);
    return date.toLocaleDateString(); // auto formats for user's region
}
function deleteTask(item){
   todoList = todoList.filter(itemname => itemname != item);
   localStorage.setItem('todoList',JSON.stringify(todoList));
   displayItems();
}

function displayItems(){
    let display = document.querySelector('.container-items');
    //adding the enter list to localStorage 
    let listStr = localStorage.getItem('todoList');
    //if todolist exists then display wid added item
    todoList = todoList ? JSON.parse(listStr):todoList;
    //above is if a dummy data is present in the code
    //if it is not present then the code will be 
    // todoList = listStr ? JSON.parse(listStr):[];
    //to handle if todolist is empty
    if(!todoList){return;}
    let newHtml='';
    for(let i=0; i<todoList.length; i++){
        let{item,dueDate}= todoList[i];
        newHtml += `
        <span>${item}</span>
        <span>${formatDate(dueDate)}</span>
        <button class= "delete-btn" onclick="
        deleteTask(todoList[${i}]);
        displayItems(); 
        "> Delete </button>`;
    }
    //after deletion the new items will b shown here
    display.innerHTML = newHtml;
}