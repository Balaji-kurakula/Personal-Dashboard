// Selecting DOM elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const taskList = document.getElementById('task-list');

// Function to add a new task
function addTask(taskContent) {
    // Create list item
    const li = document.createElement('li');
    li.textContent = taskContent;

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');

    // Append delete button to list item
    li.appendChild(deleteButton);

    // Append list item to task list
    taskList.appendChild(li);
}

// Function to remove a task
function removeTask(task) {
    task.remove();
}

// Event listener for form submission
todoForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const taskContent = todoInput.value.trim(); // Get task content
    if (taskContent !== '') {
        addTask(taskContent); // Add task to list
        todoInput.value = ''; // Clear input field
    }
});

// Event listener for delete button clicks (using event delegation)
taskList.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-btn')) {
        const task = event.target.parentElement;
        removeTask(task); // Remove task from list
    }
});
