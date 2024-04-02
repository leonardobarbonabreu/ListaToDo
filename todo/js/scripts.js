const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#todo-input");
const cancelarEditBtn = document.querySelector("#cancel-edit-btn");
const searchInput = document.QuerySelector("#search-input");
const eraseBtn = document.QuerySelector("#erase-button");
const filterBtn = document.QuerySelector("#filter-select");

let oldInputValue;

const saveTodo = (text, done = 0, save = 1) => { //Função que cria os componentes que possuem confimação edição e exclusão do input
    const todo = document.createElement("div"); // Cria a div do componente
    todo.classList.add("todo"); //cria uma classe de todo

    const todoTitle = document.createElement("h3"); //Título da div
    todoTitle.innerText = text;
    todo.appendChild(doneBtn);

    const doneBtn = document.createElement("button");  
    doneBtn.classList.add("finish-todo");
    doneBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    todo.appendChild(doneBtn);

    const editBtn = document.createElement("button"); // Botão de edição
    doneBtn.classList.add("edit-todo");
    doneBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    todo.appendChild(editBtn);
    
    const deleteBtn = document.createElement("button"); // botão de exclusão
    doneBtn.classList.add("remove-todo");
    doneBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    todo.appendChild(deleteBtn);

    if (done) {
        todo.classList.add("done");
        }
        if (save) {
            saveTodoLocalStorage({ text, done: 0})
        }
        todoList.appendChild(todo);
        todoInput. value = "";
        todoInput.focus();
}


const toggleForms = () => { //Alterna Status de visibilidade
    editForm.classList.toggle("hide");
    todoForm.classList.toggle("hide");
    todoList.classList.toggle("hide");
}

const updateTodo = () =>{ //
    const todos = document.querySelector(".todo");
    todos.forEach((todo) => {
        let todoTitle = todo.querySelector("h3");

        if (todoTitle.innerText === oldInputValue) {
            todoTitle.innerText = text;

            updateTodoLocalStorage(oldInputValue,text);
        }
    })
}