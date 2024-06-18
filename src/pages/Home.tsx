import React from 'react';
import headerImg from '../assets/images/main_hero.jpg';

const Home: React.FC = () => {
	return (
		<div>
			<div
				className=' h-screen w-full bg-cover bg-center'
				style={{
					backgroundImage: `url(${headerImg})`,
					height: 'calc(100vh - 5rem)',
				}}>
				<div className='flex items-center justify-center h-full bg-black bg-opacity-50'>
					<h1 className='text-white text-4xl md:text-6xl lg:text-8xl font-bold text-center'>
						Your trusted partner for your insurance needs
					</h1>
				</div>
			</div>
			<div className=' m-8'>
				<h1 className='text-xl md:text-6xl lg:text-8xl font-bold text-center'>
					WHO WE ARE, AND WHAT WE DO
				</h1>
				<p className=' mt-4'>
					At Senior Choice Insurance, we strive to make the insurance selection
					process easy and convenient, putting our clients needs at the
					forefront of everything we do.
				</p>
			</div>
		</div>
	);
};

export default Home;
