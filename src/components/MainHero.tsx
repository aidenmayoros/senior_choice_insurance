import headerImg from '../assets/images/main_hero.jpg';

const MainHero: React.FC = () => {
	return (
		<div
			className=' h-screen w-full bg-cover bg-center'
			style={{
				backgroundImage: `url(${headerImg})`,
				height: 'calc(100vh - 6em)',
			}}>
			<div className='flex items-center justify-center h-full bg-black bg-opacity-50'>
				<h1 className='text-white text-3xl md:text-4xl lg:text-6xl font-bold text-center w-4/5 lg:w-4/5'>
					Your trusted partner for your insurance needs
				</h1>
			</div>
		</div>
	);
};

export default MainHero;
