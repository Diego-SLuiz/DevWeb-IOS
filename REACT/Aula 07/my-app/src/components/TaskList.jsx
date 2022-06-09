import TaskItem from "./TaskItem";

function TaskList ( { title, tasks } )
{
    return (
        <div>
            <h2>{ title }</h2>
            <ul>
                { tasks.map( ( task ) => <TaskItem/> ) }
            </ul>
        </div>
    )
}

export default TaskList;
