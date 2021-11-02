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
    if(newTodo === "")
    {
        showAlert("danger", "What do you have to do?");
    }
    else
    {
        addTodoUI(newTodo);
        addTodoToStorage(newTodo);
        showAlert("success", "Todo added successful!")
    }

    event.preventDefault();
}

function getTodosFromStorage()
{
    let todos;
    if(localStorage.getItem("todos") === null)
    {
        todos = [];
    }
    else
    {
        todos = JSON.parse(localStorage.getItem("todos"))
    }
    return todos;
}

function addTodoToStorage(newTodo)
{
    let todos = getTodosFromStorage();
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
}

function showAlert(alert, message)
{
    const alertDiv  = document.createElement("div");
    alertDiv.className = `alert alert-${alert}`
    alertDiv.innerHTML = message;
    firstCardBody.appendChild(alertDiv);
    setTimeout(function()
    {
        alertDiv.remove();
    },1350);
}

function addTodoUI(newTodo)
{
    const list = document.createElement("li");
    const link = document.createElement("a");

    list.className = "list-group-item d-flex justify-content-between";
    link.className = "delete-item";
    link.href = "#";
    link.innerHTML = "<i class = \"fa fa-remove\"></i>"; 

    list.appendChild(document.createTextNode(newTodo));
    list.appendChild(link);
    todoList.appendChild(list);
    todoInput.value = "";
};


