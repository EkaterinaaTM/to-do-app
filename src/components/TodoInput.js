import React, { useState } from 'react';

// input for task
const TodoInput = ({ addTodo }) => {
  const [value, setValue] = useState('');

  // add task to TODO-list
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return; // check if input value is empty
    addTodo(value); // if not empty add task
    setValue(''); // set input value back to empty srting
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Write your task'
        className='input'
        value={value}
        onChange={e => setValue(e.target.value)} // keep input text in state
      />
    </form>
  );
};

export default TodoInput;
