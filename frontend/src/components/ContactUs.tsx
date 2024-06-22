import React from 'react';
import ContactForm from './ContactForm';

const ContactUs: React.FC = () => {
	return (
		<div>
			<h1 className='text-2xl lg:text-2xl font-bold text-center pt-5 pb-4 text-green-600 w-4/5 lg:w-full mx-auto'>
				Contact Us
			</h1>
			<ContactForm />
			<div className='bg-stone-950 w-full'>
				<h1 className='text-2xl lg:text-2xl font-bold text-center pt-5 pb-4 text-green-600 w-4/5 lg:w-full mx-auto'>
					JOIN US
				</h1>
				<p className='text-white text-xl lg:text-2xl w-4/5 lg:w-6/12 mx-auto pb-10'>
					Join Our Team At Senior Choice Insurance, we are continually seeking
					passionate individuals to join our expanding team of insurance
					professionals. We are committed to fostering a collaborative and
					empowering work environment where you can thrive and make a difference
					in people's lives.
				</p>
			</div>
		</div>
	);
};

export default ContactUs;
