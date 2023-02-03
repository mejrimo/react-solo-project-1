import Info from './components/Info';
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/Footer';
import './App.css';

export default function App() {
	return (
		<div className="container">
			<Info />
			<div className="content-container">
				<About />
				<Interests />
			</div>
			<Footer />
		</div>
	);
}
