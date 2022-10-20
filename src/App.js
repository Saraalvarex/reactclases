import logo from './logo.svg';
import './App.css';
import Contador from './components/Contador';
import DibujosComplejos from './components/DibujosComplejos';
import DibujoComplejoArray from './components/DibujoComplejoArray';
import PadreDeportes from './components/PadreDeportes';
import PadreNumeros from './components/Numeros/PadreNumeros';
import Comics from './components/Comic/Comics';

function App() {
  return (
    <div className="App">
      {/*<Contador inicio="1"/>
      <DibujosComplejos/>
      <DibujoComplejoArray/>
      <PadreDeportes/>
      <PadreNumeros/>*/}
      <Comics/>
    </div>
  );
}

export default App;
