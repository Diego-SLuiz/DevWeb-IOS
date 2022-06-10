import { useState } from "react";
import Header from './components/Header';
import TaskList from './components/TaskList';
import './App.css';

// const defaultTasks =
// [
// 	{
// 		id: 1,
// 		name: "Consulta no Dentista",
// 		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio itaque repellendus dolorem nihil facere corrupti aliquid officiis veniam quibusdam quod.",
// 		date: new Date(),
// 		status: "complete",
// 	},
// 	{
// 		id: 2,
// 		name: "Reunião de Trabalho",
// 		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio itaque repellendus dolorem nihil facere corrupti aliquid officiis veniam quibusdam quod.",
// 		date: new Date(),
// 		status: "pending",
// 	},
// ]

let idCounter = 1

function App ()
{
	// Definindo state que representa uma lista de tasks
	// const [ pendingTasks, setPendingTasks ] = useState( defaultTasks.filter( ( task ) => task.status == "pending" ) );
	const [ pendingTasks, setPendingTasks ] = useState( [] );
	// const [ completeTasks, setCompleteTasks ] = useState( defaultTasks.filter( ( task ) => task.status == "complete" ) );
	const [ completeTasks, setCompleteTasks ] = useState( [] );

	// Trocar a lista da task
	function moveTask ( task )
	{
		if ( task.status == "pending" )
		{
			task.status = "complete";
			setPendingTasks( pendingTasks.filter( ( currentTask ) => currentTask != task ) );
			setCompleteTasks( [ ...completeTasks, task ] );
			return;
		}

		task.status = "pending";
		setCompleteTasks( completeTasks.filter( ( currentTask ) => currentTask != task ) );
		setPendingTasks( [ ...pendingTasks, task ] );
	}

	// Remover uma task da lista
	function deleteTask ( task )
	{
		if ( task.status == "pending" )
		{
			setPendingTasks( pendingTasks.filter( ( currentTask ) => currentTask != task ) );
			return;
		}

		setCompleteTasks( completeTasks.filter( ( currentTask ) => currentTask != task ) );
	}

	// Adicionar uma nova task para lista
	function insertTask ( task )
	{
		console.log( idCounter )
		task.id = idCounter;
		idCounter += 1;
		setPendingTasks( [ ...pendingTasks, task ] );
	}

	let pendingTasksComponent = <TaskList title="Tarefas Pendentes" tasks={ pendingTasks } onToggle={ moveTask } onDelete={ deleteTask }/>;
	let completeTasksComponent = <TaskList title="Tarefas Concluídas" tasks={ completeTasks } onToggle={ moveTask } onDelete={ deleteTask }/>;

	return (
		<div className="container">
			<Header onCreate={ insertTask } title="Lista de Tarefas"/>
			{ pendingTasks.length ? pendingTasksComponent : <h2>Não há tarefas pendentes!</h2> }
			{ completeTasks.length ? completeTasksComponent : <h2>Não há tarefas concluídas!</h2> }
		</div>
	)
}

export default App;
