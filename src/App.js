import { useState } from 'react';
import './App.css';

function App() {

  const [todoList, setTodoList] = useState([])
  const [newTask, setNewTask] = useState([])

  const handleChange = (event) => {
    setNewTask(event.target.value)
  }

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    }
    setTodoList([...todoList, task]) // old list + the new task
  }

  const deleteTask = (id) => {
    // setTodoList(todoList.filter((task) => task !==taskName ))
    const newTodoList = todoList.filter((task) => {
      return task.id !== id
    })
    setTodoList(newTodoList)
  }

  return (
    <div className="App">
      <div className='addTask'>
        <input onChange={handleChange} />
        <button onClick={addTask}>
          Add task
        </button>
      </div>
      <div className='taskList'>
        {todoList.map((task) => {
          return (
            <div>
              <h1>{task.taskName}</h1>
              {/* a function with a parameter needs to be called inside a anonymous function to work */}
              <button onClick={() => deleteTask(task.id)}>X</button>
            </div>
          )

        })}

      </div>
    </div>
  );
}

export default App;
