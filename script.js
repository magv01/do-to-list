
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const toDoList = document.getElementById("toDoList");

//obtains tasks from local storage
const existingTasks = JSON.parse(localStorage.getItem("toDo"));

//renders the task on the page
if(existingTasks){
    existingTasks.forEach(task => addTask(task));
}

addBtn.addEventListener("click", () => {
    addTask()
});


function addTask(taskData = null){
    const toDoTask = input.value.trim();
    // Check if the input is valid or if we're loading a task from localStorage
    if (toDoTask !== ""|| taskData){
        // Use the text from localStorage or input value
        const taskText = taskData ? taskData.text : toDoTask;  
    
    const li = document.createElement("li");
    const span = document.createElement("span");
    const div= document.createElement("div");
    span.textContent= taskText;

      // If the task is marked as done in localStorage, add the 'line_through' class
      if (taskData && taskData.done) {
        span.classList.add("line_through");
    }

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
    updateLS();

}
else{
    alert("Please enter a new task");
}}

function editTask(span){
    const newTask = prompt("Edit task:", span.textContent);
    if (newTask !== null && newTask.trim() !== "") {
        span.textContent = newTask.trim();
    }
    updateLS();
}

function deleteTask(task){
    toDoList.removeChild(task);
    updateLS();

}

function doneTask(span){
    span.classList.toggle("line_through");
    updateLS();

}

//update Local Storage

function updateLS() {
    const allTasks = document.querySelectorAll("li");

    const tasks = [];
    allTasks.forEach(task => {
        // Grab the text content of the <span> element within each <li>
        const taskText = task.querySelector("span");
        tasks.push({ 
            text: taskText.textContent,
            done:  taskText.classList.contains("line_through")
        });
    });
    console.log(tasks);

    localStorage.setItem("toDo", JSON.stringify(tasks));

};
