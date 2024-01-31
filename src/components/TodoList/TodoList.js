import React, { useState } from 'react';
import Todo from '../todo/Todo';
import classes from './todoList.module.css';

const TodoList = ({ tasks, setTasks, handleDone, handleEdit }) => {
  const [currentEdit, setCurrentEdit] = useState('');
  const [filterOption, setFilterOption] = useState('all');

  const handleFilterChange = (selectedOption) => {
    setFilterOption(selectedOption);
  };

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleClearAllTasks = () => {
    setTasks([]);
    localStorage.removeItem('tasks');
  };

  const filteredTasks = tasks.filter((task) => {
    if (filterOption === 'all') {
      return true;
    } else if (filterOption === 'completed') {
      return task.completed;
    } else if (filterOption === 'uncompleted') {
      return !task.completed;
    }
    return true;
  });

  return (
    <div>
      <div>
        <label htmlFor="filter">Filter:</label>
        <select
          id="filter"
          value={filterOption}
          onChange={(e) => handleFilterChange(e.target.value)}
        >
          <option value="all">All Tasks</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
      <div className={classes.list}>
        <button onClick={handleClearAllTasks}>Clear All</button>
        {filteredTasks.map((task, index) => (
          <Todo
            key={task.id}
            task={task}
            handleDelete={() => handleDelete(task.id)}
            index={index}
            handleDone={handleDone}
            handleEdit={handleEdit}
            handleCurrent={setCurrentEdit}
            isEdit={currentEdit === task.id}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;