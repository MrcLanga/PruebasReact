import React from "react";
import '../estilos/boton.css'

function Boton({ texto , esclick , manejar }) {
	return (
	  <button className={ esclick ? "boton-click" : "boton-reiniciar" } onClick={manejar}>
		{texto}
	  </button>
	);
  }
  
  export default Boton;
  