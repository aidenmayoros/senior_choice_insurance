import MainHero from '../components/MainHero';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/ContactUs';
import Footer from '../components/Footer';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

// Interface for the details of each agent
export interface AgentDetails {
	number: string;
	email: string;
}

// Interface for the agents object
interface Agent {
	[key: string]: AgentDetails;
}

const agents: Agent = {
	'/nick': {
		number: '(866) 846-9802',
		email: 'agency@srchoice.us',
	},
	'/brandon': {
		number: '(877) 529-0636',
		email: 'brandon@srchoice.us',
	},
	'/cressie': {
		number: '(866) 724-4294',
		email: 'cressie@srchoice.us',
	},
	'/kevin': {
		number: '(866) 724-4810',
		email: 'kevin@srchoice.us',
	},
	'/cristian': {
		number: '(866) 724-4614',
		email: 'cristian@srchoice.us',
	},
	'/ethan': {
		number: '(866) 724-4809',
		email: 'ethan@srchoice.us',
	},
	'/luke': {
		number: '(866) 724-4616',
		email: 'luke@srchoice.us',
	},
};

const Home: React.FC = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const { pathname } = location;
	const validPaths = [
		'/nick',
		'/brandon',
		'/cressie',
		'/kevin',
		'/cristian',
		'/ethan',
		'/luke',
	];

	const initialAgent = validPaths.includes(pathname)
		? agents[pathname]
		: agents['/nick'];

	const [agentDetails] = useState(initialAgent);

	useEffect(() => {
		if (!validPaths.includes(pathname)) {
			// Replace the current URL with "/"
			navigate('/', { replace: true });
		}
	}, []);

	return (
		<div className='flex flex-col min-h-screen'>
			<section id='section1' className='flex-grow'>
				<MainHero agentDetails={agentDetails} />
			</section>
			<section id='section2'>
				<div id='about'>
					<About />
				</div>
			</section>
			<section id='section3'>
				<div id='services'>
					<Services />
				</div>
			</section>
			<section id='section4'>
				<div id='contact'>
					<Contact />
				</div>
			</section>
			<Footer agentDetails={agentDetails} />
		</div>
	);
};

export default Home;
