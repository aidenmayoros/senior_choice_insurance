import BackgroundImg from '../assets/images/footer_background.jpg';

const Footer: React.FC = () => {
	return (
		<footer
			className='lg:bg-cover bg-center py-10'
			style={{ backgroundImage: `url(${BackgroundImg})` }}>
			<div className='text-black'>
				<div className='flex flex-col lg:flex-row justify-evenly'>
					<div className='mb-6 md:mb-0 ml-5 lg:ml-0'>
						<h2 className='text-3xl md:text-xl font-bold mb-2 w-4/5'>
							Ready to get started?
						</h2>
						<p className='text-lg w-4/5'>
							Dial 1-866-846-9802 to learn more today!
						</p>
					</div>
					<div className='ml-5 lg:ml-0'>
						<h2 className='text-3xl md:text-xl font-bold mb-2'>Email Us</h2>
						<p className='text-lg'>agency@srchoice.us</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
