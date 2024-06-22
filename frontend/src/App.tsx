import './App.css';
import Navbar from './components/Navbar';
import MainHero from './components/MainHero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/ContactUs';
import Footer from './components/Footer';

function App() {
	return (
		<div className='flex flex-col min-h-screen'>
			<Navbar />
			<div className='flex-grow'>
				<MainHero />
				<div id='about'>
					<About />
				</div>
				<div id='services'>
					<Services />
				</div>
				<div id='contact'>
					<Contact />
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default App;
