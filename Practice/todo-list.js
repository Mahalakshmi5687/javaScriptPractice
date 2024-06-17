const todoList = [];

renderTodoList(); 
function renderTodoList(){
    let todoListHTML = '';

    for(let i=0; i<todoList.length; i++){
        const todoObject = todoList[i];
        const {name, dueDate} = todoObject;
        const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button class="delete-todo-button js-delete-todo-button"> 
        Delete</button>
        
        `;
        todoListHTML += html;
    }
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;

    document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, i)=>{
        deleteButton.addEventListener('click', ()=>{
            todoList.splice(i, 1);
            renderTodoList();
        });
    });
}

document.querySelector('.js-add-todo-button')
.addEventListener('click', ()=>{
    addTodo();
});
function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const inputElement1 = document.querySelector('.js-due-date-input');
    const name = inputElement.value;
    const dueDate = inputElement1.value;
    todoList.push({
        //name: name,
        //dueDate: dueDate,
        name,
        dueDate
    });
    console.log(todoList);
    inputElement.value = '';
    inputElement1.value = '';
    renderTodoList(); 

}