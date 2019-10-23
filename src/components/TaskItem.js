import React from 'react';

const TaskItem = ({ todo, index, completeToDo, removeToDo }) => (
  <div
    className='todo'
    style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
  >
    <p className='todo_text'>{todo.text}</p>

    <div>
      <button onClick={() => completeToDo(index)} className='todo_complete btn'>
        Complete
      </button>
      <button onClick={() => removeToDo(index)} className='btn'>
        X
      </button>
    </div>
  </div>
);

export default TaskItem;
