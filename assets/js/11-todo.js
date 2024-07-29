const todoList = ['yemek ye', 'telefonunu şarj et', 'su iç'];
let todoListHtml = '';

function renderTodoList() {
  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`
    todoListHtml += html;
  }

  console.log(todoListHtml);
  document.querySelector('.todo-list').innerHTML = todoListHtml;
}
renderTodoList();

function addTodo() {
  const todoNameInput = document.querySelector('.todo-name-input');
  const todoNameValue = todoNameInput.value;
  todoList.push(todoNameValue)
  console.log(todoList);

  todoNameInput.value = '';
  renderTodoList();
}