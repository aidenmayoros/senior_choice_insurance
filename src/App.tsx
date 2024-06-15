import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/ContactUs';
import Footer from './components/Footer';

function App() {
	return (
		<Router>
			<div className='flex flex-col min-h-screen'>
				<Navbar />
				<div className='flex-grow'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/services' element={<Services />} />
						<Route path='/contact' element={<Contact />} />
					</Routes>
				</div>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
