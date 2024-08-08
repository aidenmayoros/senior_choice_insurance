import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Career from './pages/Career';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/careers' element={<Career />} />
				<Route path='/privacy-policy' element={<PrivacyPolicy />} />
			</Routes>
		</Router>
	);
}

export default App;
