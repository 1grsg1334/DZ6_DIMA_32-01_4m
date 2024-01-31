import React, { useState } from 'react';
import Modal from './components/modal/Modal';
import Button from './components/button/Button';
import TodoList from './components/TodoList/TodoList';
import PokemonPage from './pages/Pokemons/PokemonPage';


function App() {

  const [show, setShow] = useState(false);
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([
    { id: 1, task: 'coding', completed: false },
    { id: 2, task: 'eat', completed: false },
    { id: 3, task: 'sleep', completed: false }
  ]);
  const handleShow = () => setShow(!show);

  const handleAdd = () => {
    setTasks((prev) => [
      ...prev,
      {
        id: tasks.length + 1,
        task: input,
        completed: false,
      },
    ]);
    setInput('');
  };

  const onChangeInput = (event) => {
    setInput(event.target.value);
  };

  const handleDone = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleEdit = (editedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === editedTask.id ? editedTask : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <div>
      {show && <Modal handleShow={handleShow} onChangeInput={onChangeInput} handleAdd={handleAdd} />}
      <Button action={handleShow} text={'Open'} />
      <TodoList tasks={tasks} setTasks={setTasks} handleDone={handleDone} handleEdit={handleEdit} />
      <div>
      <PokemonPage />
    </div>
    </div>
  );
}

export default App;