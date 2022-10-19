import logo from './logo.svg';
import './App.css';
import Contador from './components/Contador';
import DibujosComplejos from './components/DibujosComplejos';
import DibujoComplejoArray from './components/DibujoComplejoArray';
import PadreDeportes from './components/PadreDeportes';

function App() {
  return (
    <div className="App">
      {/*<Contador inicio="1"/>
      <DibujosComplejos/>
      <DibujoComplejoArray/>*/}
      <PadreDeportes/>
    </div>
  );
}

export default App;
