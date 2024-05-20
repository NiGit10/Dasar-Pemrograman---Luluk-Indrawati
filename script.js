function calculateArea() {
    const shape = document.getElementById("shape").value;
    const input1 = parseFloat(document.getElementById("input1").value);
    const input2 = parseFloat(document.getElementById("input2").value);
    let area;

    switch (shape) {
        case "square":
            area = input1 * input1;
            break;
        case "rectangle":
            area = input1 * input2;
            break;
        case "triangle":
            area = 0.5 * input1 * input2;
            break;
        case "circle":
            const pi = Math.PI;
            area = pi * input1 * input1;
            break;
        default:
            area = "Pilihan tidak valid";
            break;
    }

    document.getElementById("result").innerText = `Luas: ${area}`;
}
document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', (event) => {
        event.preventDefault();
        addTodo(todoInput.value);
        todoInput.value = '';
    });

    function addTodo(todoText) {
        const todoItem = document.createElement('li');
        const todoTextSpan = document.createElement('span');
        todoTextSpan.textContent = todoText;
        todoItem.appendChild(todoTextSpan);

        const actions = document.createElement('div');
        actions.classList.add('todo-actions');
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.classList.add('complete');
        completeButton.addEventListener('click', () => {
            todoItem.classList.toggle('completed');
        });
        actions.appendChild(completeButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(todoItem);
        });
        actions.appendChild(deleteButton);

        todoItem.appendChild(actions);
        todoList.appendChild(todoItem);
    }
});