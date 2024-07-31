import headerImg from '../assets/images/main_hero.jpg';

const MainHero: React.FC = () => {
	return (
		<div
			className=' h-screen w-full bg-cover bg-center'
			style={{
				backgroundImage: `url(${headerImg})`,
				height: '115vh',
			}}>
			<div className='flex flex-col items-center justify-center h-full bg-black bg-opacity-50'>
				<h1 className='text-white text-3xl md:text-4xl lg:text-6xl font-bold text-center w-4/5 lg:w-4/5 m-10'>
					Your trusted partner for your insurance needs
				</h1>
				<h1 className='text-white text-3xl md:text-4xl lg:text-6xl font-bold text-center w-4/5 lg:w-4/5'>
					Call today for a free consultation
				</h1>
				<div className='mt-8'>
					<a
						href='tel:+1234567890'
						className='px-4 py-2 bg-[#72F072] font-semibold rounded-md shadow-md hover:bg-green-700 hover:text-white transition duration-300'>
						(866) 846-9802
					</a>
				</div>
			</div>
		</div>
	);
};

export default MainHero;
