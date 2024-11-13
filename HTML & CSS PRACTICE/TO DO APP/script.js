

function loadTodos(){
    // This function will load todos from browser
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    console.log(todos);
    return todos;
}   

function addTodoToLocalStorage(todoText);{
    const todos = loadTodos();
    todos.push(todoText);
    localStorage.setItem("todos", todos)
}

document.addEventListener("DOMcontentloaded", ()=> {
    const todoInput = document.getElementById("todoInput");

    const submitButton = document.getElementById("addTodo");
    submitButton.addEventListener("click", (event) =>{
        const todoText = todoInput.value;
        if(todoText ==""){
            alert(" something for todo")
        }else{
            addTodoToLocalStorage();
        }
    })


todoInput.addEventListener("change", (event) =>{
    // This callback method fire everytime there is a change in the input tag

    const todoText = event.target.value;
    event.target.value = todoText.trim()
    console.log(event.target.value);
})

    loadTodos();
} );