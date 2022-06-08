import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';
import './App.css';

function App() {
	const [ tasks, setTasks ] = useState(
		[
			{
				id: 1,
				text: 'Consulta médica',
				day: '5 de Fev as 14:30',
				reminder: true,
			},
			{
				id: 2,
				text: 'Reunião na Escola',
				day: '6 de Fev as 13:30',
				reminder: true,
			},
			{
				id: 3,
				text: 'Compras no Supermercado',
				day: '7 de Fev as 8:30',
				reminder: false,
			},
		]
	)

	function deleteTask ( id )
	{
		setTasks( tasks.filter( ( task ) => task.id != id ) );
	}

	function setReminder ( id )
	{
		setTasks( tasks.map( ( task ) => task.id == id ? { ...task, reminder: ! task.reminder } : task ) );
	}

	return (
		<div className="container">
			<Header title="Tarefas"/>
			{ tasks.length ? <Tasks tasks={ tasks } onDelete={ deleteTask } onToggle={ setReminder }/> : <h3>Você nâo possui tarefas!</h3> }
    	</div>
	)
}

export default App;
