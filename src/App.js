import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import { Context } from './context';

export default function App() {
  const [todos, setTodos] = useState([
    // { id: 1, title: 'First todo', completed: false },
    // { id: 2, title: 'Second todo', completed: true }
  ]);

  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const raw = localStorage.getItem('todos');
    setTodos(JSON.parse(raw));
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]); // works when todos-state changes

  const onPressEnter = e => {
    if (e.key === 'Enter') {
      setTodos([
        {
          id: Date.now(),
          title: inputValue,
          completed: false
        },
        ...todos
      ]);
      setInputValue('');
    }
  };

  const onInputChange = e => {
    setInputValue(e.target.value);
  };

  const removeTodo = id => setTodos(todos.filter(todo => todo.id !== id));

  const toggleTodo = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };
  return (
    <Context.Provider value={[toggleTodo, removeTodo]}>
      <div className='container'>
        <h1>Todo app</h1>

        <div className='input-field'>
          <input
            type='text'
            value={inputValue}
            onKeyPress={onPressEnter}
            onChange={onInputChange}
          />
          <label>Todo name</label>
        </div>

        <TodoList todos={todos} />
      </div>
    </Context.Provider>
  );
}
