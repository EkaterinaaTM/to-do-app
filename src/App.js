import React, { useState } from 'react';
import './styles/App.scss';

import TaskItem from './components/TaskItem';
import TodoForm from './components/TodoForm';

const App = () => {
  const [todos, setTodos] = useState([
    {
      text: 'Learn about React',
      isCompleted: false
    },
    {
      text: 'Meet friend for lunch',
      isCompleted: false
    },
    {
      text: 'Build really cool todo app',
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className='app-wrapper'>
      <h1 className='title_h1'>To Do List</h1>
      <div className='todo-list'>
        {todos.map((todo, index) => (
          <TaskItem
            key={index}
            index={index}
            todo={todo}
            completeToDo={completeTodo}
            removeToDo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
};

export default App;
