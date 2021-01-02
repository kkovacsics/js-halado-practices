'use strict';

(function(){
    // Parts of date
    const bodyDay = document.querySelector('.body__day');
    const bodyDate = document.querySelector('.body__date');
    const todoAddBtn = document.querySelector('.todo__btn');
    const todoInput = document.querySelector('.todo__input');
    const todoListPending = document.querySelector('.todo__list--pending');

    // localStorage handler object
    const localDB = {
        setItem(key, value) {
            value = JSON.stringify(value);
            localStorage.setItem(key, value);
        },
        getItem(key){
            const value = localStorage.getItem(key);
            if(!value){     // ha nincs ilyen kulcs a localStorage-ban
                return null;
            }
            return JSON.parse(value);
        },
        removeItem(key){
            localStorage.removeItem(key);
        }
    };

    // localDB.setItem('todos', 'akármi');
    // console.log(localDB.getItem('todos'));
    // localDB.removeItem('todos');

    // Initialize application
    let todos = [];
    const init = () => {
        showDate();
        setListeners();
        loadExistingTodos();
    };
    
    // Load existing todos
    const loadExistingTodos = () => {
        const savedTodos = localDB.getItem('todos');
        if(savedTodos){
            todos = savedTodos;
        }
    
        if ( todos && Array.isArray(todos)){
            todos.forEach(todo => showTodo(todo));
        }
    }

    // Show date
    const showDate = () => {
        const dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        const currentDate = new Date();
        bodyDay.textContent = dayNames[currentDate.getDay()];

        const date = [
            currentDate.getFullYear(),
            currentDate.getMonth()+1,
            currentDate.getDate()
        ].map(num => num<10? `0{num}`: num);
        bodyDate.textContent = date.join('-');
    };

    // Set event listeners.
    const setListeners = () => {
        todoAddBtn.addEventListener('click', addNewTodo);
    };

    const addNewTodo = () => {
        const value = todoInput.value;
        if (value === ''){
            alert('Nothing todo');
            return;
        }
        const todo = {
            text: value,
            done: false,
        }
        todos.push(todo);
        localDB.setItem('todos', todos);
        showTodo(todo);
        todoInput.value = '';
    };

    // Show todo in the list
    const showTodo = todo => {
        const todoItem = document.createElement('div');
        todoListPending.appendChild(todoItem);
        todoItem.innerHTML = `
            <input type="checkbox">
            <span>${todo.text}</span>
            <button><i class="fa fa-trash"></i></button>
        `;

    };

    init();
})();