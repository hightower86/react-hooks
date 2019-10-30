import React, { useState } from 'react';
import TodoList from './TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: 'First todo', completed: false },
    { id: 2, title: 'Second todo', completed: true }
  ]);

  const [inputValue, setInputValue] = useState('');

  const onAddTodo = e => {
    // console.log('enter', e.key);
    if (e.key === 'Enter') {
      console.log('enter');
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: inputValue,
          completed: false
        }
      ]);
      setInputValue('');
    }
  };

  const onInput = e => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  console.log(todos);
  return (
    <div className='container'>
      <h1>Todo app</h1>

      <div className='input-field'>
        <input
          type='text'
          value={inputValue}
          onKeyPress={onAddTodo}
          onChange={onInput}
        />
        <label>Todo name</label>
      </div>

      <TodoList todos={todos} />
    </div>
  );
};

export default App;
