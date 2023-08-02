import React, { useState } from 'react';
import '../css/juego.css';

export const Juego = () => {
	const [seleccionJugador, setSeleccionJugador] = useState('');
	const [seleccionComputadora, setSeleccionComputadora] = useState('');
	const [resultado, setResultado] = useState('');

	const seleccionOpcion = (opcion) => {
		setSeleccionJugador(opcion);

		const eleccionComputadora = Math.floor(Math.random() * 3);
		let computadoraResultado = '';

		switch (eleccionComputadora) {
			case 0:
				computadoraResultado = 'piedra';
				break;

			case 1:
				computadoraResultado = 'papel';
				break;

			case 2:
				computadoraResultado = 'tijera';
				break;
		}

		setSeleccionComputadora(computadoraResultado);

		calcularResultado(opcion, computadoraResultado);
	};

	const calcularResultado = (opcionJugador, opcionComputadora) => {
		if (opcionJugador === opcionComputadora) {
			return setResultado('empate');
		} else if (opcionJugador === 'piedra') {
			if (opcionComputadora === 'papel') {
				return setResultado('perdiste');
			} else {
				return setResultado('ganaste');
			}
		} else if (opcionJugador === 'papel') {
			if (opcionComputadora === 'piedra') {
				return setResultado('ganaste');
			} else {
				return setResultado('perdiste');
			}
		} else if (opcionJugador === 'tijera') {
			if (opcionComputadora === 'papel') {
				return setResultado('ganaste');
			} else {
				return setResultado('perdiste');
			}
		}
	};

	return (
		<div className="container">
			<h1 className="title">Piedra Papel o Tijera</h1>
			<p className="instruction">Seleccione su opcion:</p>
			<div className="choices">
				<button className="choice" onClick={() => seleccionOpcion('piedra')}>
					Piedra
				</button>
				<button className="choice" onClick={() => seleccionOpcion('papel')}>
					Papel
				</button>
				<button className="choice" onClick={() => seleccionOpcion('tijera')}>
					Tijera
				</button>
			</div>

			{seleccionJugador ? (
				<div>
					<p>
						Tu seleccion fue:
						<span className="seleccion-text">{seleccionJugador}</span>
					</p>

					<p>
						La computadora selecciono:
						<span className="seleccion-text">{seleccionComputadora}</span>
					</p>

					<p className="result-text">{resultado}</p>
				</div>
			) : (
				''
			)}
		</div>
	);
};
