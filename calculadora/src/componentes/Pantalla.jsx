import React from "react";
import '../estilos/Pantalla.css'

// En este caso al ser un componente simple utilizamos la funcion flecha

const Pantalla = ({ input }) => (
	<div className="input">
		{input}
	</div>
)

export default Pantalla