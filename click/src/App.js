import './App.css';
import logo from './imgs/logo.png'
import Boton from './componentes/boton';
import Contador from './componentes/contador';
import { useState } from 'react'

function App() {

  const [total, setTotal] = useState(0);

  const click = () => {
    setTotal(total + 1);
  }

  const reiniciar = () => {
    setTotal(0);
  }

  return (
    <div className="App">
      <div className="logocontainer">
        <img className="logo" 
          src={logo}
          alt="Logo" />
      </div>
      <div className="padre">

          <Contador 
            total={total} />

          <Boton 
            texto="Click" 
            esclick={true}
            manejar={click} />

          <Boton 
            texto="Resetear" 
            esclick={false}
            manejar={reiniciar} />
            
      </div>
    </div>
  );
}

export default App;
