import React, { useState } from 'react';
import logo from '../assets/images/logos/Senior Choice Insurance.png';

const Navbar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleLinkClick = (id: string) => {
		setIsOpen(false);
		scrollToSection(id);
	};

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<nav className='bg-stone-950 text-white p-4'>
			<div className='sm:px-6'>
				<div className='flex items-center justify-between h-16'>
					<div className='flex items-center'>
						<img src={logo} alt='Company Logo' className='w-48 md:w-72' />
						<div className='hidden md:block'>
							<div className='ml-10 flex items-baseline space-x-4'>
								<button
									onClick={() => scrollToSection('about')}
									className='hover:bg-green-600 px-3 py-2 rounded-md text-sm font-medium'>
									About
								</button>
								<button
									onClick={() => scrollToSection('services')}
									className='hover:bg-green-600 px-3 py-2 rounded-md text-sm font-medium'>
									Services
								</button>
								<button
									onClick={() => scrollToSection('contact')}
									className='hover:bg-green-600 px-3 py-2 rounded-md text-sm font-medium'>
									Contact Us
								</button>
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

			<div
				className={`${
					isOpen ? 'block' : 'hidden'
				} md:hidden absolute top-18 left-0 w-full bg-stone-950 z-10`}>
				<div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
					<button
						onClick={() => handleLinkClick('about')}
						className='block px-3 py-2 rounded-md text-base font-medium hover:bg-green-600'>
						About
					</button>
					<button
						onClick={() => handleLinkClick('services')}
						className='block px-3 py-2 rounded-md text-base font-medium hover:bg-green-600'>
						Services
					</button>
					<button
						onClick={() => handleLinkClick('contact')}
						className='block px-3 py-2 rounded-md text-base font-medium hover:bg-green-600'>
						Contact Us
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
