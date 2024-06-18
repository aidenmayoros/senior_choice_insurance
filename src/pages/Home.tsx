import React from 'react';
import headerImg from '../assets/images/main_hero.jpg';

const Home: React.FC = () => {
	return (
		<div
			className='h-screen w-full bg-cover bg-center'
			style={{ backgroundImage: `url(${headerImg})` }}>
			<div className='flex items-center justify-center h-full bg-black bg-opacity-50'>
				<h1 className='text-white text-4xl md:text-6xl lg:text-8xl font-bold text-center'>
					Your trusted partner for your insurance needs
				</h1>
			</div>
		</div>
	);
};

export default Home;
