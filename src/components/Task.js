import '../styles/Task.css'

const Task = (props) => {
    return (
        <div>
            <h1>{props.taskName}</h1>
            {/* a function with a parameter needs to be called inside a anonymous function to work */}
            <button onClick={() => props.deleteTask(props.id)}>
                X
            </button>
            <button onClick={() => props.editTask(props.id)}>
                Edit
            </button>
        </div>
    )

}
export default Task
