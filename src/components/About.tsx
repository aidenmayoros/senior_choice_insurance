import React from 'react';
import waves from '../assets/images/waves.svg';

const About: React.FC = () => {
	return (
		<div className='relative w-full lg:min-h-72'>
			<div
				className='absolute inset-0 bg-cover bg-center opacity-5 lg:w-5/12'
				style={{
					backgroundImage: `url(${waves})`,
				}}></div>
			<div className='relative z-10 text-center m-0'>
				<h1 className='text-2xl lg:text-2xl font-bold text-center pt-5 pb-4 text-green-600 w-4/5 lg:w-full mx-auto'>
					WHO WE ARE, AND WHAT WE DO
				</h1>
				<p className='mt-4 text-lg text-center mx-auto lg:w-6/12 pb-10 px-5'>
					At Senior Choice Insurance, we strive to make the insurance selection
					process easy and convenient, putting our clients needs at the
					forefront of everything we do. We believe insurance is more than just
					an investment. It's a sign of your commitment to a quality life and
					looking out for the people you care about. That's why we take the time
					to get to know you and your needs, before offering solutions. As your
					trusted partner, our objective is to provide the highest level of
					customer service and education so that our clients feel confident and
					secure with their insurance policies.
				</p>
			</div>
		</div>
	);
};

export default About;
