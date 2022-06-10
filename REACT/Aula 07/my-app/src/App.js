import { useState } from "react";
import Header from './components/Header';
import TaskList from './components/TaskList';
import './App.css';

let idCounter = 1

function App ()
{
	// Definindo state que representa uma lista de tasks
	const [ pendingTasks, setPendingTasks ] = useState( [] );
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
		task.id = idCounter;
		idCounter += 1;
		setPendingTasks( [ ...pendingTasks, task ] );
	}

	// Componentes que serão renderizados
	let pendingTasksComponent = <TaskList title="Tarefas Pendentes" tasks={ pendingTasks } onToggle={ moveTask } onDelete={ deleteTask }/>;
	let emptyPendingComponent = <h2 className="center-text card">Não há tarefas pendentes!</h2>;

	let completeTasksComponent = <TaskList title="Tarefas Concluídas" tasks={ completeTasks } onToggle={ moveTask } onDelete={ deleteTask }/>;
	let emptyCompleteComponent = <h2 className="center-text card">Não há tarefas concluídas!</h2>;

	let startingEmptyComponents = <h2 className="center-text card">Você não tem tarefas. Crie algumas para começar!</h2>;

	return (
		<div className="container">
			<Header onCreate={ insertTask } title="Lista de Tarefas"/>
			{ pendingTasks.length ? pendingTasksComponent : completeTasks.length ? emptyPendingComponent : null }
			{ completeTasks.length ? completeTasksComponent : pendingTasks.length ? emptyCompleteComponent : null }
			{ ! pendingTasks.length && ! completeTasks.length ? startingEmptyComponents : null }
		</div>
	)
}

export default App;
