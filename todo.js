const todoForm = document.querySelector(".js-todoForm");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".js-todoList");

const TODO_LS = "todo";

let todos = [];

function deleteTodo(event){
    const btn = event.target;
    const li = btn.parentNode;

    todoList.removeChild(li);

    const cleanTodo = todos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    todos = cleanTodo;
    saveTodo();
}

function saveTodo(){
    localStorage.setItem(TODO_LS, JSON.stringify(todos));
}

function paintTodo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = todos.length + 1;

    delBtn.innerText = "X";
    delBtn.addEventListener("click", deleteTodo);
    span.innerText = text;

    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    todoList.appendChild(li);

    const todoObj = {
        text : text,
        id : newId
    };

    todos.push(todoObj);
    saveTodo();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = todoInput.value;
    paintTodo(currentValue);
    todoInput.value = "";
}

function loadTodo(){
    const todo = localStorage.getItem(TODO_LS);

    if(todo !== null){
        const parsedTodo = JSON.parse(todo);
        parsedTodo.forEach(function(toDo){
            paintTodo(toDo.text);
        });
    }
}

function init(){
    loadTodo();
    todoForm.addEventListener("submit", handleSubmit);
}

init();