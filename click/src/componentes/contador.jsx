import React from "react";
import '../estilos/contador.css'

function Contador({ total }) {
	return (
		<div className="contador">
			{total}
		</div>
	);
}

export default Contador