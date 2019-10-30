import React, { useState } from 'react';

const onDelete = id => {
  console.log('onDelete', id);
};

export default function TodoItem({ title, id, completed }) {
  const [checked, setChecked] = useState(completed);
  const onInputChange = () => {
    setChecked(!checked);
  };
  const cls = ['todo'];
  if (checked) cls.push('completed');
  return (
    <li className={cls.join(' ')}>
      <label>
        <input type='checkbox' checked={checked} onChange={onInputChange} />
        <span>{title}</span>

        <i className='material-icons red-text' onClick={() => onDelete(id)}>
          delete
        </i>
      </label>
    </li>
  );
}
