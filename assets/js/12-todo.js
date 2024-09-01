const todoList = [
  { name: 'yemek ye', dueDate: '2024-08-01' },
  { name: 'telefonunu şarj et', dueDate: '2024-07-31' },
  { name: 'su iç', dueDate: '2024-08-02' }
];

renderTodoList();

function renderTodoList() {
  let todoListHtml = '';
  todoList.forEach(function (todoObject, index) {
    const { name, dueDate } = todoObject;
    const html = `
     <div>${name}</div>
      <div>${dueDate}</div>
      <button onClick="
       todoList.splice(${index}, 1);
        renderTodoList();
      " class="delete-todo-button">Delete</button>
    `
    todoListHtml += html;
  })
  /*   for (let i = 0; i < todoList.length; i++) {
      const todoObj = todoList[i];
      const { name, dueDate } = todoObj;
      const html = `
       <div>${name}</div>
        <div>${dueDate}</div>
        <button onClick="
         todoList.splice(${i}, 1);
          renderTodoList();
        " class="delete-todo-button">Delete</button>
      `
      todoListHtml += html;
    } */
  document.querySelector('.todo-list').innerHTML = todoListHtml;
}
renderTodoList();

function addTodo() {
  const todoNameInput = document.querySelector('.todo-name-input');
  const name = todoNameInput.value;

  const todoDateInput = document.querySelector('.todo-date-input');
  const dueDate = todoDateInput.value;

  todoList.push({ name, dueDate });

  todoNameInput.value = '';
  renderTodoList();
}