import { Navbar } from './components/Navbar';
import { Noticia } from './components/Noticia.jsx';

function App() {
	const tituloNoticia = 'Argentina Campeon del mundo';

	const descripcionNoticia =
		'despues de vencer 3-2 a francia argentina se corono por tercera vez seguida campeon mundial como en el 78,86';

	return (
		<>
			<Navbar />

			<section>
				<h3>Noticias Mundiales</h3>

				<Noticia titulo={tituloNoticia} descripcion={descripcionNoticia} />
			</section>
		</>
	);
}

export default App;
