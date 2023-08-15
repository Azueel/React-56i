import React, { Fragment, useState } from 'react';

export const Contador = () => {
	const [contador, setContador] = useState(15);

	const [msg, setMsg] = useState('');

	const restar = () => {
		setContador(contador - 1);
	};

	const resetear = () => {
		setContador(15);
	};

	const sumar = () => {
		setContador(contador + 1);
	};

	const mostrarMensaje = () => {
		setMsg('soy un mensaje');

		setTimeout(() => {
			setMsg('');
		}, 5000);
	};

	return (
		<>
			{/* MOSTRAR EL MENSAJE */}
			<h2>{msg}</h2>

			<h2 className="p-5">{contador}</h2>

			<button onClick={restar}>-1</button>
			<button onClick={resetear}>Reset</button>
			<button onClick={sumar}>+1</button>

			<button onClick={mostrarMensaje}>Mostrar mensaje</button>
		</>
	);
};
