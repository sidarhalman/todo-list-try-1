const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("clear-todos");


addEventListener();

function addEventListener()
{
    form.addEventListener("submit", addTodo);
};

function addTodo(event)
{   
    
    const newTodo = todoInput.value.trim();
    
    console.log(newTodo);

    event.preventDefault();
}