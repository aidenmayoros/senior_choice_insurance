import MainHero from '../components/MainHero';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/ContactUs';
import Footer from '../components/Footer';

const Home: React.FC = () => {
	return (
		<div className='flex flex-col min-h-screen'>
			<section id='section1' className='flex-grow'>
				<MainHero />
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
			<Footer />
		</div>
	);
};

export default Home;
