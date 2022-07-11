import React from "react";
import '../estilos/Clear.css'

const Clear = ({ children , manejarClear}) => (
	<div className="btnclear" onClick={manejarClear}>
		{children}
	</div>
)

export default Clear