/*
   Filename: ComplexWebApp.js
   
   Description: This code represents a complex web application that includes various modules and functionalities. It showcases advanced JavaScript concepts and best practices.
*/

// Module 1: User Authentication
const UserAuthenticationModule = (() => {
  let loggedInUser = null;

  const handleLogin = (username, password) => {
    // Simulating API call to validate credentials
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === 'admin' && password === 'password') {
          loggedInUser = {
            username: 'admin',
            role: 'admin'
          };
          resolve(loggedInUser);
        } else {
          loggedInUser = null;
          reject('Invalid credentials!');
        }
      }, 2000);
    });
  };

  const handleLogout = () => {
    loggedInUser = null;
    console.log('User logged out successfully.');
  };

  const getLoggedInUser = () => {
    return loggedInUser;
  };

  return {
    handleLogin,
    handleLogout,
    getLoggedInUser
  };
})();

// Module 2: Todo List Management
const TodoListModule = (() => {
  let todos = [];

  const addTodo = (title, description) => {
    todos.push({
      title,
      description,
      completed: false
    });
  };

  const markTodoComplete = (index) => {
    todos[index].completed = true;
  };

  const deleteTodo = (index) => {
    todos.splice(index, 1);
  };

  const getAllTodos = () => {
    return todos;
  };

  return {
    addTodo,
    markTodoComplete,
    deleteTodo,
    getAllTodos
  };
})();

// Module 3: UI Interactions
const UIInteractionModule = (() => {
  const loginForm = document.getElementById('login-form');
  const logoutButton = document.getElementById('logout-button');
  const todoForm = document.getElementById('todo-form');
  const todoList = document.getElementById('todo-list');

  const initialize = () => {
    // Event listeners
    loginForm.addEventListener('submit', handleLoginFormSubmit);
    logoutButton.addEventListener('click', handleLogout);
    todoForm.addEventListener('submit', handleTodoFormSubmit);

    // UI initialization
    todoList.innerHTML = ''; // Clear existing todos
    updateUI(); // Update UI based on login state
  };

  const handleLoginFormSubmit = async (e) => {
    e.preventDefault();

    const usernameInput = document.getElementById('username-input');
    const passwordInput = document.getElementById('password-input');

    const username = usernameInput.value;
    const password = passwordInput.value;

    try {
      const user = await UserAuthenticationModule.handleLogin(username, password);
      console.log('User logged in:', user);

      usernameInput.value = '';
      passwordInput.value = '';

      updateUI();
    } catch (error) {
      console.error('Login failed:', error);
      alert(error);
    }
  };

  const handleLogout = () => {
    UserAuthenticationModule.handleLogout();
    updateUI();
  };

  const handleTodoFormSubmit = (e) => {
    e.preventDefault();

    const titleInput = document.getElementById('title-input');
    const descriptionInput = document.getElementById('description-input');

    const title = titleInput.value;
    const description = descriptionInput.value;

    TodoListModule.addTodo(title, description);

    titleInput.value = '';
    descriptionInput.value = '';

    updateUI();
  };

  const updateUI = () => {
    const loggedInUser = UserAuthenticationModule.getLoggedInUser();

    if (loggedInUser) {
      loginForm.style.display = 'none';
      logoutButton.style.display = 'block';
      todoForm.style.display = 'block';

      const todos = TodoListModule.getAllTodos();

      todoList.innerHTML = '';

      todos.forEach((todo, index) => {
        const todoElement = document.createElement('li');
        todoElement.innerHTML = `
          <input type="checkbox" ${todo.completed ? 'checked' : ''} />
          <span>${todo.title}</span>
          <button onclick="deleteTodoAtIndex(${index})">Delete</button>
        `;
        todoList.appendChild(todoElement);
      });
    } else {
      loginForm.style.display = 'block';
      logoutButton.style.display = 'none';
      todoForm.style.display = 'none';
      todoList.innerHTML = '';
    }
  };

  return {
    initialize
  };
})();

UIInteractionModule.initialize();