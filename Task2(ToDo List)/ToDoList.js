function addTask() {
  const taskInput = document.getElementById('new-task');
  const taskText = taskInput.value.trim();

  if (taskText === '') return;

  const taskList = document.getElementById('task-list');

  const li = document.createElement('li');
  li.innerHTML = `
      <span onclick="toggleComplete(this)">${taskText}</span>
      <button onclick="deleteTask(this)">Delete</button>
  `;

  taskList.appendChild(li);
  taskInput.value = '';
}

function deleteTask(button) {
  const li = button.parentElement;
  li.remove();
}

function toggleComplete(span) {
  const li = span.parentElement;
  li.classList.toggle('completed');
}
