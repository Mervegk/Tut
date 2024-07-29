const todoList = [];
function addTodo() {
  const todoNameInput = document.querySelector('.todo-name-input');
  const todoNameValue = todoNameInput.value;
  todoList.push(todoNameValue)
  console.log(todoList);

  todoNameInput.value = '';
}