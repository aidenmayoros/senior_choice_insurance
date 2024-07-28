import React from 'react';
import ServicesImg from '../assets/images/services_hero.jpg';

const Services: React.FC = () => {
	return (
		<div className='bg-[#F8F8F8]'>
			<h1 className='text-2xl lg:text-2xl font-bold text-center pt-5 pb-4 text-[#28C8FF] w-11/12 mx-auto'>
				DISCOVER OUR SPECIALIZED INSURANCE OFFERINGS
			</h1>
			<div className='flex flex-col md:flex-row'>
				<div className='md:w-1/2 hidden md:block'>
					<img
						src={ServicesImg}
						alt='Services'
						className='w-full h-full object-cover'
					/>
				</div>
				<div className='md:w-1/2 flex items-center justify-center p-4'>
					<div className='bg-white rounded-lg shadow-lg p-8 transform transition duration-300 hover:scale-105'>
						<ul className='text-lg pl-5'>
							<li className='mb-2'>Medicare Advantage</li>
							<li className='mb-2'>Medicare Supplement</li>
							<li className='mb-2'>Individual and Family Health Plans</li>
							<li className='mb-2'>Whole Life Insurance</li>
							<li className='mb-2'>Term Life Insurance</li>
							<li className='mb-2'>Final Expense Coverage</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
