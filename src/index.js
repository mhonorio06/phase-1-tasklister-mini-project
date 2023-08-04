document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.querySelector("#create-task-form")
  const taskList = document.querySelector("#tasks")
  taskForm.addEventListener("submit", function (e) {
  e.preventDefault()
  const newTask = document.querySelector("#new-task-description").value;
  makeTasks(newTask)
  taskForm.reset()
  })
})
  function makeTasks (tasks) {
    let p = document.createElement("p")
    let btn = document.createElement("button")
    btn.addEventListener("click", deleteTask)
    p.textContent = `${tasks} `
    btn.textContent = "x"
    p.appendChild(btn)
    console.log(p)
    document.querySelector("#tasks").appendChild(p)
  }
  function deleteTask (e){
    e.target.parentNode.remove()
  }


