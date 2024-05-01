import { useState } from 'react';
import './App.css';

function App() {

  const [todoList, setTodoList] = useState([])
  const [newTask, setNewTask] = useState([])

  const handleChange = (event) => {
    setNewTask(event.target.value)
  }

  return (
    <div className="App">
      <div className='addTask'>
        <input onChange={handleChange} />
        <button
        // add task function
          onClick={() => {
            setTodoList([...todoList, newTask])
          }}
        >
          Add task
        </button>
      </div>
      <div className='taskList'>
        {todoList.map((task) => {
          return <h1>{task}</h1>
        })}

      </div>
    </div>
  );
}

export default App;
