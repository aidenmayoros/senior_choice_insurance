import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';

function App() {
	return (
		<Router>
			<div className='flex flex-col min-h-screen'>
				<Navbar />
				<main className='flex-grow'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/services' element={<Services />} />
						<Route path='/contact' element={<ContactUs />} />
					</Routes>
				</main>
			</div>
		</Router>
	);
}

export default App;
