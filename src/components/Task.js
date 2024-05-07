const Task = (props) => {
    return (
        <div className="card mb-3 mx-auto" style={{ width: "35rem" }}>
            <div className="card-body">
                <p className="card-subtitle mb-2 text-muted">
                    {props.taskName}
                </p>

                {/* a function with a parameter needs to be called inside a anonymous function to work */}
                <button
                    className="btn btn-danger btn-sm mt-2"
                    onClick={() => props.deleteTask(props.id)}>
                    X
                </button>
                <button
                    className="btn btn-primary"
                    onClick={() => props.editTask(props.id)}>
                    Edit
                </button>
            </div>
        </div>
    )

}
export default Task
