import React from "react";
import '../estilos/Boton.css'

function Boton({ children , manejarClic}) {

	const esOperador = valor => {
		return isNaN(valor) && (valor !== '.') && ( valor !== "=");
	}

	return (
		<div className={`botoncont ${esOperador(children)  ? 'operador' : null}`.trimEnd()}  onClick={() => manejarClic(children)}>
			{children}
		</div>
	);
}

export default Boton