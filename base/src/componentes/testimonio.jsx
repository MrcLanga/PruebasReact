import React from "react";
import "../estilos/Testimonio.css"

function Testimonio() {
	return(

		<div className="container">

			{/* Imagen */}
			<img className="imgtest"
			src={require("../imgs/testimonio-emma.png")} 
			alt="Foto de Emma" />
			
			{/* Texto */}
			<div className="textotest">
				<p className="nombretest">Emma Bostian en Suecia</p>
				<p className="cargotest">Ingeniera de Software en Spotify</p>
				<p className="desctest">"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo eligendi iure corrupti saepe reiciendis a facilis! Explicabo incidunt nobis cumque animi consequuntur, laudantium ipsam laboriosam sapiente laborum non libero eius!"</p>
			</div>

		</div>
	)
} 

export default Testimonio