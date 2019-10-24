const TASK_KEY = 'task';
// const TOKEN_KEY = 'jwt';

/* Add task to local storage */
export const setTask = (value, taskKey = TASK_KEY) => {
  if (localStorage) {
    localStorage.setItem(taskKey, JSON.stringify(value));
  }
};

export const getTasks = (taskKey = TASK_KEY) => {
  return localStorage && localStorage.getItem(taskKey)
    ? JSON.parse(localStorage.getItem(taskKey))
    : [];
};

export const clearTask = (taskKey = TASK_KEY) => {
  if (localStorage) {
    localStorage.removeItem(taskKey);
  }
};

// localStorage.clear()
