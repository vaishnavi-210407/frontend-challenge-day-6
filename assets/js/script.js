const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");
const empty = document.getElementById("empty");

// Add Task
function addTask() {
  let text = input.value.trim();

  if (text === "") return;

  const li = document.createElement("li");
  li.innerHTML = `
    <span>${text}</span>
    <span class="delete">✖</span>
  `;

  list.appendChild(li);
  input.value = "";

  updateEmpty();

  // Delete
  li.querySelector(".delete").onclick = () => {
    li.remove();
    updateEmpty();
  };
}

// Button click
addBtn.onclick = addTask;

// Enter key
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});

// Empty state
function updateEmpty(){
  empty.style.display = list.children.length === 0 ? "block" : "none";
}