import { useState } from 'react';
import './styles/App.css'
import Task from './components/Task';

function App() {

  const [todoList, setTodoList] = useState([])
  const [newTask, setNewTask] = useState("")

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
    setTodoList(todoList.filter((task) => task.id !==id ))
    // const newTodoList = todoList.filter((task) => {
    //   return task.id !== id
    // })
    // setTodoList(newTodoList)
  }

  const editTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          const edit = prompt('edit here: ')
          return { ...task, taskName: edit }
        }
        else return task
      })
    )
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
            <Task
              taskName={task.taskName}
              id={task.id}
              deleteTask={deleteTask} // can pass function as props
              editTask={editTask}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;
