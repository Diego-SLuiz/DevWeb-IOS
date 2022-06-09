import { useState } from "react";
import Header from './components/Header';
import TaskList from './components/TaskList';
import './App.css';

const tempTasks =
[
	{
		id: 1,
		name: "Consulta no Dentista",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio itaque repellendus dolorem nihil facere corrupti aliquid officiis veniam quibusdam quod.",
		date: new Date(),
		status: "pending",
	},
	{
		id: 2,
		name: "Reunião de Trabalho",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio itaque repellendus dolorem nihil facere corrupti aliquid officiis veniam quibusdam quod.",
		date: new Date(),
		status: "complete",
	},
	{
		id: 3,
		name: "Limpar a Casa",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio itaque repellendus dolorem nihil facere corrupti aliquid officiis veniam quibusdam quod.",
		date: new Date(),
		status: "incomplete",
	},
	{
		id: 3,
		name: "Limpar a Casa",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio itaque repellendus dolorem nihil facere corrupti aliquid officiis veniam quibusdam quod.",
		date: new Date(),
		status: "incomplete",
	},
	{
		id: 3,
		name: "Limpar a Casa",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio itaque repellendus dolorem nihil facere corrupti aliquid officiis veniam quibusdam quod.",
		date: new Date(),
		status: "incomplete",
	},
]

function App ()
{
	const [ pendingTasks, setPendingTasks ] = useState( tempTasks.filter( ( task ) => task.status == "pending" ) );
	const [ completeTasks, setCompleteTasks ] = useState( tempTasks.filter( ( task ) => task.status == "complete" ) );
	const [ incompleteTasks, setIncompleteTasks ] = useState( tempTasks.filter( ( task ) => task.status == "incomplete" ) );

	let defaultMessage = ( pendingTasks.length | completeTasks.length | incompleteTasks.length ) ? null : <h2>Tudo quieto por aqui...</h2>;

	return (
		<div>
			<Header title="Lista de Tarefas"/>
			{ pendingTasks.length ? <TaskList title="Tarefas Pendentes" tasks={ pendingTasks }/> : null }
			{ completeTasks.length ? <TaskList title="Tarefas Concluídas" tasks={ completeTasks }/> : null }
			{ incompleteTasks.length ? <TaskList title="Tarefas Antigas" tasks={ incompleteTasks }/> : null }
			{ defaultMessage }
		</div>
	)
}

export default App;
