import './App.css';
import BoasVindas from './components/BoasVindas'
import Sobre from './components/Sobre'

function App() {
  return (
    <div style={ { width: "50%", margin: "0 auto" } }>
      <BoasVindas name="Diego"/>
      <Sobre/>
    </div>
  )
}

export default App;
