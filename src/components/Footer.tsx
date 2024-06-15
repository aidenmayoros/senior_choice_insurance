import BackgroundImg from '../assets/images/footer_background.jpg';

const Footer: React.FC = () => {
	return (
		<footer
			className='bg-cover bg-center py-10'
			style={{ backgroundImage: `url(${BackgroundImg})` }}>
			<div className='text-black'>
				<div className='flex flex-col md:flex-row justify-evenly text-center'>
					<div className='mb-6 md:mb-0'>
						<h2 className='text-xl font-bold mb-2'>Call Us</h2>
						<p className='text-lg'>1-866-846-9802</p>
					</div>
					<div>
						<h2 className='text-xl font-bold mb-2'>Email Us</h2>
						<p className='text-lg'>agency@srchoice.us</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
