//selectors
const todoInput = document.querySelector(".todo-input")
const todoButton = document.querySelector(".todo-button")
const todoList = document.querySelector(".todo-list") //ul


//functions
const addTodo = (event) => {
    //prevents button from submitting the form
    event.preventDefault()
    //creating todoDiv
    const todoDiv = document.createElement("div")
    todoDiv.classList.add("todoDiv")
    //create LI
    const newTodo = document.createElement("li")
    newTodo.classList.add("todo-item")
    newTodo.innerText = todoInput.value
    todoDiv.appendChild(newTodo)
    //creating completed button
    const completedButton = document.createElement("button")
    completedButton.classList.add("completed-btn")
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    todoDiv.appendChild(completedButton)
    //creating delete button
    const deleteButton = document.createElement("button")
    deleteButton.classList.add("delete-btn")
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>'
    todoDiv.appendChild(deleteButton)
    //append todoDiv to UL
    todoList.appendChild(todoDiv)
    //clearing input
    todoInput.value = ""
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
//event-listeners
todoButton.addEventListener("click", addTodo)
todoList.addEventListener("click", deleteComplete)

