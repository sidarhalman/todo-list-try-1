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
    addTodoUI(newTodo);
    event.preventDefault();
}

function addTodoUI(newTodo)
{
   const list = document.createElement("li");
   const link = document.createElement("a");

   list.className = "list-group-item d-flex justify-content-between";
   link.className = "delete-item";
   link.href = "#";
   link.innerHTML = "<i class = \"fa fa-remove\"></i>"; 
}



/* <li class="list-group-item d-flex justify-content-between">

<a href = "#" class ="delete-item">
   <i class = "fa fa-remove"></i>
</a>

</li> */


