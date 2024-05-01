import { useState } from 'react';
import './App.css';

function App() {

  const [todoList, setTodoList] = useState([])
  const [newTask, setNewTask] = useState([])

  const handleChange = (event) => {
    setNewTask(event.target.value)
  }

  const deleteTask = (taskName) => {
    const newTodoList = todoList.filter((task) => {
      return task !== taskName
    })
    setTodoList(newTodoList)
  }

  return (
    <div className="App">
      <div className='addTask'>
        <input onChange={handleChange} />
        <button
          onClick={() => {
            const newTodoList = [...todoList, newTask]
            setTodoList(newTodoList)
          }}
        >
          Add task
        </button>
      </div>
      <div className='taskList'>
        {todoList.map((task) => {
          return (
            <div>
              <h1>{task}</h1>
              <button onClick={() => deleteTask(task)}>X</button>
            </div>
          )

        })}

      </div>
    </div>
  );
}

export default App;
