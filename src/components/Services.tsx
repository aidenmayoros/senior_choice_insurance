import React from 'react';
import ServicesImg from '../assets/images/services_hero.jpg';

const Services: React.FC = () => {
	return (
		<div>
			<h1 className='text-center text-3xl p-5'>
				Discover our specialized insurance offerings:
			</h1>
			<div className='flex flex-col md:flex-row bg-[#8C8C8E] text-white'>
				<div className='md:w-1/2 hidden md:block'>
					<img
						src={ServicesImg}
						alt='Services'
						className='w-full h-full object-cover'
					/>
				</div>
				<div className='md:w-1/2 flex items-center'>
					<ul className='mx-auto text-2xl list-disc'>
						<li>Medicare Advantage</li>
						<li>Medicare Supplement</li>
						<li>Individual and Family Health Plans</li>
						<li>Whole Life Insurance</li>
						<li>Term Life Insurance</li>
						<li>Final Expense Coverage</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Services;
