import TaskItem from "./TaskItem";

function Tasks ( { tasks } )
{
    return (
        <div>
            { tasks.map( ( task ) => ( <TaskItem key={ task.id } task={ task } /> ) ) }
        </div>
    )
}

export default Tasks;
