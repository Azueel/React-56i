import { useState } from 'react';
import { Container, Form } from 'react-bootstrap';

import Card from 'react-bootstrap/Card';

const products = [
	{
		id: 1,
		name: 'TV LG',
		image: 'https://www.lg.com/ar/images/televisores/md06198636/gallery/DES_1_N.jpg',
	},

	{
		id: 2,
		name: 'celular',
		image:
			'https://megatonedigital.vteximg.com.br/arquivos/ids/182553-520-520/148232_01.jpg?v=638131500136670000',
	},

	{
		id: 3,
		name: 'Monitor curvo',
		image:
			'https://img.global.news.samsung.com/mx/wp-content/uploads/2022/02/Odyssey-Neo-G9_2.jpg',
	},
];

function App() {
	const [buscador, setBuscador] = useState('');

	const [resultadoFiltro, setResultadoFiltro] = useState(products);

	const handleBuscador = (e) => {
		const resultadoBuscador = e.target.value;
		setBuscador(resultadoBuscador);

		const filtro = products.filter((product) =>
			product.name.toLowerCase().includes(resultadoBuscador.toLowerCase())
		);

		setResultadoFiltro(filtro);
	};

	return (
		<>
			<Container>
				<h1 className="mt-4">Buscador de productos</h1>

				<Form.Group className="my-4">
					<Form.Control
						type="text"
						placeholder="BuscarProducto..."
						onChange={handleBuscador}
					/>
				</Form.Group>

				<div className="d-flex justify-content-evenly">
					{resultadoFiltro.map((product) => {
						return (
							<div key={product.id}>
								<Card style={{ width: '18rem' }}>
									<Card.Img variant="top" src={product.image} />
									<Card.Body>
										<Card.Title className="text-center">{product.name}</Card.Title>
									</Card.Body>
								</Card>
							</div>
						);
					})}
				</div>
			</Container>
		</>
	);
}

export default App;
