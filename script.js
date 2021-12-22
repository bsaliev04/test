//selectors
const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list") //ul
const filterOption = document.querySelector(".filter-todo")
const alert = document.querySelector(".alert")

//functions
const addTodo = (event) => {
    //prevents button from submitting the form
    event.preventDefault()
    if (!todoInput.value) {
        alert.innerText = "Please enter a valid text"
        alert.style.visibility = "visible"
        alert.classList.add("error")
        setTimeout(() => {
            alert.style.visibility = "hidden"
            alert.classList.remove("error")
        }, 1500)
    } else {
        //creating todoDiv
        const todoDiv = document.createElement("div")
        todoDiv.classList.add("todoDiv")
        todoDiv.innerHTML = `
            <li class="todo-item">${todoInput.value}</li>
            <button class="completed-btn">
                <i class="fas fa-check"></i>
            </button>
            <button class="delete-btn">
                <i class="fas fa-trash"></i>
            </button>`
        //append todoDiv to UL
        todoList.appendChild(todoDiv)
        //clearing input
        todoInput.value = "";
        alert.innerText = "Item Succesfully Added!"
        alert.style.visibility = "visible"
        alert.classList.add("success")
        setTimeout(() => {
            alert.style.visibility = "hidden"
            alert.classList.remove("success")
        }, 1500)
    }   
}

const deleteComplete = (event) => {
    const item = event.target
    if (item.classList.contains("delete-btn")) {
        const todo = item.parentElement;
        todo.classList.add("fall")
        todo.addEventListener("transitionend", () => {
            todo.remove()
        })
    } else if (item.classList.contains("completed-btn")) {
        const todo = item.parentElement;
        todo.classList.toggle("completed")
    }
}

const filterTodo = (event) => {
    const todos = todoList.childNodes
    todos.forEach((todo) => {
        switch (event.target.value) {
            case "all": 
                todo.style.display = "flex"
                break;
            case "completed": 
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex"
                } else {
                    todo.style.display = "none"
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex"
                } else {
                    todo.style.display = "none"
                }
                break; 
        }
    })
}
//event-listeners
todoButton.addEventListener("click", addTodo)
todoList.addEventListener("click", deleteComplete)
filterOption.addEventListener("click", filterTodo)
