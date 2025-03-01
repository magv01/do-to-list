
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const toDoList = document.getElementById("toDoList");




addBtn.addEventListener("click", (e) => {
    addTask()
});


function addTask(e){
    const toDoTask = input.value.trim();
    if (toDoTask !== null && toDoTask.trim() !== ""){

    
    const li = document.createElement("li");
    const span = document.createElement("span");
    const div= document.createElement("div");
    span.textContent= input.value;

    const editBtn = document.createElement("button");
    editBtn.innerHTML = ("&#9998");
    editBtn.onclick =() => editTask(span);

    const doneBtn = document.createElement("button");
    doneBtn.innerHTML = ("&#10003");
    doneBtn.onclick =() => doneTask(span);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = ("&#10006");
    deleteBtn.onclick =() => deleteTask(li);

    li.appendChild(span);
    li.appendChild(div);
    div.appendChild(editBtn);
    div.appendChild(doneBtn);
    div.appendChild(deleteBtn);
    toDoList.appendChild(li);

    input.value = "";

}
else{
    alert("Please enter a new task");
}}

function editTask(span){
    const newTask = prompt("Edit task:", span.textContent);
    if (newTask !== null && newTask.trim() !== "") {
        span.textContent = newTask.trim();
    }
}

function deleteTask(task){
    toDoList.removeChild(task);
}

function doneTask(span){
    span.style.setProperty("text-decoration", "line-through");

}