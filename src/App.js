import React, { useState } from 'react';
import TodoList from './TodoList';

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'First todo', completed: false },
    { id: 2, title: 'Second todo', completed: true }
  ]);

  const [inputValue, setInputValue] = useState('');

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
  return (
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
  );
}
