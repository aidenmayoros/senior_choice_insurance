import React from 'react';
import { Link } from 'react-router-dom';
import BackgroundImg from '../assets/images/footer_background.jpg';

const Footer: React.FC = () => {
	return (
		<footer
			className='lg:bg-cover bg-center py-10'
			style={{
				backgroundImage: `url(${BackgroundImg})`,
			}}>
			<div className='text-black flex flex-col justify-evenly text-center mx-3 md:mx-0'>
				<div className='p-5'>
					<h2 className='text-3xl md:text-xl font-bold mb-2'>
						Ready to get started?
					</h2>
					<p className='text-lg'>Dial 1-866-846-9802 to learn more today!</p>
				</div>
				<div className='p-5'>
					<h2 className='text-3xl md:text-xl font-bold'>Email Us</h2>
					<p className='text-lg'>agency@srchoice.us</p>
				</div>
				<div className='pt-5'>
					<Link
						to='/privacy-policy'
						className='hover:bg-[#72F072] hover:text-black px-3 py-2 rounded-md text-xl font-medium'>
						Privacy Policy
					</Link>
				</div>
				<div className='flex flex-col pt-8 text-center'>
					<p className='text-lg pb-4 mx-5'>
						This site provides Medicare information and related insurance
						information. It is not connected to the government.
					</p>
					<p className='text-lg mx-5'>
						Disclaimer: We are not a government agency website. We do not offer
						every Medicare Advantage plan available in your area. <br></br>
						Please contact www.medicare.gov or 1-800-MEDICARE or your local
						State Health Insurance Program to get information on all your
						<br></br>
						Medicare Advantage options.
					</p>
					<p className='pt-10'>
						© Copyright-2024 Nick Cronin LLC, DBA Senior Choice Insurance and
						srchoiceinsurance.com is owned by Nick Cronin.<br></br> All Rights
						Reserved. Powered by Seniors Choice Insurance.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
