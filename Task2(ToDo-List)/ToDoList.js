function addTask() {
  const taskInput = document.getElementById('new-task');
  const taskText = taskInput.value.trim();

  if (taskText === '') return;

  const taskList = document.getElementById('task-list');
  const li = document.createElement('li');

  // Get current date & time
  const now = new Date();
  const options = { weekday: 'short', hour: '2-digit', minute: '2-digit' };
  const dateString = now.toLocaleDateString('en-US', options);

  li.innerHTML = `
      <span onclick="toggleComplete(this)">${taskText}</span>
      <span class="task-date">${dateString}</span>
      <button onclick="deleteTask(this)">❌</button>
  `;

  taskList.appendChild(li);
  taskInput.value = '';
}

function deleteTask(button) {
  const li = button.parentElement;
  li.style.transition = "0.4s";
  li.style.transform = "translateX(100px)";
  li.style.opacity = "0";
  setTimeout(() => li.remove(), 400);
}

function toggleComplete(span) {
  const li = span.parentElement;
  li.classList.toggle('completed');
}
