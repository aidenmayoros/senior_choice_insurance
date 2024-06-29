import React from 'react';
import ContactForm from './ContactForm';

const ContactUs: React.FC = () => {
	return (
		<div>
			<h1 className='text-2xl lg:text-2xl font-bold text-center pt-5 pb-4 text-[#28C8FF] w-4/5 lg:w-full mx-auto'>
				Contact Us
			</h1>
			<ContactForm />
		</div>
	);
};

export default ContactUs;
