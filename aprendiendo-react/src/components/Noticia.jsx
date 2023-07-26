import React from 'react';

export const Noticia = (props) => {
	return (
		<>
			<h3>{props.titulo}</h3>
			<p>{props.descripcion}</p>
		</>
	);
};
