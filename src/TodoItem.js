import React, { useState } from 'react';

export default function TodoItem({ title, id, completed }) {
  const [checked, setChecked] = useState(completed);
  // const setChecked = () => {
  //   checked = true;
  // };
  const cls = ['todo'];
  if (checked) {
    cls.push('completed');
  }
  return (
    <li className={cls.join(' ')}>
      <label>
        <input
          type='checkbox'
          defaultChecked={false}
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <span>{title}</span>

        <i className='material-icons red-text'>delete</i>
      </label>
    </li>
  );
}
