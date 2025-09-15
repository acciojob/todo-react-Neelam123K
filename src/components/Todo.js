import React from 'react';

const Todo = ({ tasks, onDelete}) => {
  return (
    <div>
      <li>
 {tasks} <button onClick={onDelete}>Delete</button>
      </li>
    </div>
  );
}

export default Todo;
