function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
  
    if (taskInput.value.trim() === "") {
      alert("Please enter a valid task!");
      return;
    }
  
    const newTask = document.createElement("li");
    newTask.innerHTML = `
      <span>${taskInput.value}</span>
      <span class="delete-btn" onclick="removeTask(this)">Delete</span>
    `;
    taskList.appendChild(newTask);
    taskInput.value = "";
  }
  
  function removeTask(taskElement) {
    const taskList = document.getElementById("taskList");
    taskList.removeChild(taskElement.parentElement);
  }