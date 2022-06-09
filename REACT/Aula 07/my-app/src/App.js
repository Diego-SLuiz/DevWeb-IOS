import { useState } from "react";
import Header from './components/Header';
import TaskList from './components/TaskList';
import './App.css';

const tempTasks =
[
	{
		id: 1,
		title: "Consulta no Dentista",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio itaque repellendus dolorem nihil facere corrupti aliquid officiis veniam quibusdam quod.",
		date: new Date(),
		status: "pending",
	},
	{
		id: 2,
		title: "Reunião de Trabalho",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio itaque repellendus dolorem nihil facere corrupti aliquid officiis veniam quibusdam quod.",
		date: new Date(),
		status: "complete",
	},
	{
		id: 3,
		title: "Limpar a Casa",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio itaque repellendus dolorem nihil facere corrupti aliquid officiis veniam quibusdam quod.",
		date: new Date(),
		status: "incomplete",
	},
]

function App ()
{
	const [ tasks, setTasks ] = useState( tempTasks );

	return (
		<div>
			<Header title="Lista de Tarefas"/>
			<TaskList title="Tarefas Concluídas" tasks={ tasks }/>
			<TaskList title="Tarefas Pendentes" tasks={ tasks }/>
			<TaskList title="Tarefas Passadas" tasks={ tasks }/>
		</div>
	)
}

export default App;
