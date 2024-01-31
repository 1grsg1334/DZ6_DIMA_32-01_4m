import React, { useState } from 'react';
import classes from './todo.module.css';
import Button from '../button/Button';

const Todo = ({ task, handleDelete, index, handleDone, handleEdit, handleCurrent, isEdit }) => {
  const [newTitle, setNewTitle] = useState(task.task);

  const resetEditState = () => {
    setNewTitle(task.task);
    handleCurrent(null);
  };

  return (
    <>
      {isEdit ? (
        <div className={classes.edit}>
          <input
            type="text"
            value={newTitle}
            onChange={(event) => setNewTitle(event.target.value)}
          />
          <Button
            action={() => {
              handleEdit({
                ...task,
                task: newTitle,
              });
              resetEditState();
            }}
            text={'Save'}
          />
          <Button action={resetEditState} text={'Cancel'} />
        </div>
      ) : (
        <div className={`${classes.todo} ${task.completed && classes.isDone} `}>
          <p>{index + 1} {task.task}</p>
          <Button action={() => handleCurrent(task.id)} text={'Edit'} />
          <Button action={() => handleDone(task.id)} text={'Done'} />
          <Button action={() => handleDelete(task.id)} text={'Delete'} />
        </div>
      )}
    </>
  );
};

export default Todo;