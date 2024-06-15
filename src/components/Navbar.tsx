import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logos/Senior Choice Insurance.png';

const Navbar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className='bg-gray-500 text-white p-4'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex items-center justify-between h-16'>
					<div className='flex items-center'>
						<div className='flex-shrink-0'>
							<Link to='/'>
								<img src={logo} alt='Company Logo' className='w-48 md:w-72 ' />
							</Link>
						</div>
						<div className='hidden md:block'>
							<div className='ml-10 flex items-baseline space-x-4'>
								<Link
									to='/'
									className='hover:bg-cyan-600 px-3 py-2 rounded-md text-sm font-medium'>
									Home
								</Link>
								<Link
									to='/about'
									className='hover:bg-cyan-600 px-3 py-2 rounded-md text-sm font-medium'>
									About
								</Link>
								<Link
									to='/services'
									className='hover:bg-cyan-600 px-3 py-2 rounded-md text-sm font-medium'>
									Services
								</Link>
								<Link
									to='/contact'
									className='hover:bg-cyan-600 px-3 py-2 rounded-md text-sm font-medium'>
									Contact Us
								</Link>
							</div>
						</div>
					</div>
					<div className='-mr-2 flex md:hidden'>
						<button
							onClick={() => setIsOpen(!isOpen)}
							className='inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none'>
							<span className='sr-only'>Open main menu</span>
							<div className='relative w-6 h-6'>
								<svg
									className={`absolute inset-0 transform transition-all duration-300 ${
										isOpen ? 'opacity-0 rotate-45' : 'opacity-100 rotate-0'
									}`}
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M4 6h16M4 12h16M4 18h16'
									/>
								</svg>
								<svg
									className={`absolute inset-0 transform transition-all duration-300 ${
										isOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-45'
									}`}
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M6 18L18 6M6 6l12 12'
									/>
								</svg>
							</div>
						</button>
					</div>
				</div>
			</div>

			<div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
				<div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
					<Link
						to='/'
						className='block px-3 py-2 rounded-md text-base font-medium hover:bg-cyan-600'>
						Home
					</Link>
					<Link
						to='/about'
						className='block px-3 py-2 rounded-md text-base font-medium hover:bg-cyan-600'>
						About
					</Link>
					<Link
						to='/services'
						className='block px-3 py-2 rounded-md text-base font-medium hover:bg-cyan-600'>
						Services
					</Link>
					<Link
						to='/contact'
						className='block px-3 py-2 rounded-md text-base font-medium hover:bg-cyan-600'>
						Contact Us
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
