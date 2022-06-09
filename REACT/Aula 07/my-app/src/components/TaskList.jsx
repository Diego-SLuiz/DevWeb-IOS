import TaskItem from "./TaskItem";

function TaskList ( { title, tasks } )
{
    return (
        <div className="task-list">
            <h2 className="task-title" >{ title }</h2>
            <ul>
                { tasks.map( ( task ) => <TaskItem key={ task.id } task={ task }/> ) }
            </ul>
        </div>
    )
}

export default TaskList;
