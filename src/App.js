import React, { useState, useEffect } from 'react';
import './styles/App.scss';
import { setTask, getTasks } from './utils/index';
import TaskItem from './components/TaskItem';
import TodoInput from './components/TodoInput';

// =============================================================================
// в коде намеренно для наглядности оставлено 2 варианта сохранения тасков:
// в стейте и в локальном хранилище
// =============================================================================

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

  let tasks = getTasks();

  // добавляем дефолтные таски в localStorage
  useEffect(() => {
    setTask(todos);
  });

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos); // using react state
    setTask(newTodos); // using local storage
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos); // using react state
    setTask(newTodos); // local storage
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos); // using react state
    setTask(newTodos); // local storage
  };

  return (
    <div className='app-wrapper'>
      <h1 className='title_h1'>To Do List</h1>
      <div className='todo-list'>
        {tasks.map((
          todo,
          index // мапить tasks при работе с localStorage, мапить todos при работе со стейтом
        ) => (
          <TaskItem
            key={index}
            index={index}
            todo={todo}
            completeToDo={completeTodo}
            removeToDo={removeTodo}
          />
        ))}
        <TodoInput addTodo={addTodo} />
      </div>
    </div>
  );
};

export default App;
