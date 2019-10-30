import React, { useState, useContext } from 'react';
import { Context } from './context';

// const onDelete = id => {
//   console.log('onDelete', id);
// };

export default function TodoItem({ title, id, completed }) {
  const [checked, setChecked] = useState(completed);

  const [toggleTodo, removeTodo] = useContext(Context);

  // const onInputChange = () => {
  //   setChecked(!checked);
  // };
  const cls = ['todo'];

  if (completed) cls.push('completed');

  return (
    <li className={cls.join(' ')}>
      <label>
        <input
          type='checkbox'
          checked={completed}
          onChange={() => toggleTodo(id)}
        />
        <span>{title}</span>

        <i className='material-icons red-text' onClick={() => removeTodo(id)}>
          delete
        </i>
      </label>
    </li>
  );
}
