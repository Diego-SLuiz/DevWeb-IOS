import TaskItem from "./TaskItem";

function TaskList ( { title, tasks, onToggle, onDelete } )
{
    return (
        <div className="task-list card">
            <h2 className="task-title" >{ title }</h2>
            <ul>
                { tasks.map( ( task ) => <TaskItem key={ task.id } task={ task } onToggle={ onToggle } onDelete={ onDelete }/> ) }
            </ul>
        </div>
    )
}

export default TaskList;
