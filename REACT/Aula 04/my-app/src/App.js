import Nota from './components/Nota';
import Nome from './components/Nome';
import './App.css';

function App ()
{
	return (
		<div className="main-app">
			<div>
				<Nome aluno="Diego"/>
				<Nota notas={ [ 7, 8, 4, 6 ] }/>
			</div>

			<div>
				<Nome aluno="João"/>
				<Nota notas={ [ 10, 8, 9, 7 ] }/>
			</div>

			<div>
				<Nome aluno="Maria"/>
				<Nota notas={ [ 1, 2, 10, 6 ] }/>
			</div>

			<div>
				<Nome/>
				<Nota/>
			</div>
		</div>
	)
}

export default App;
