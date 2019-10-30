import React from 'react';

const onDelete = id => {
  console.log('onDelete', id);
};

export default function TodoItem({ title, id, completed }) {
  return (
    <li className='todo'>
      <label>
        <input type='checkbox' defaultChecked={false} />
        <span>{title}</span>

        <i className='material-icons red-text' onClick={() => onDelete(id)}>
          delete
        </i>
      </label>
    </li>
  );
}
