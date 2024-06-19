import React from 'react';
import ContactForm from './ContactForm';

const ContactUs: React.FC = () => {
	return (
		<div className='p-4 pb-10'>
			<h1 className='text-xl lg:text-2xl font-bold text-center pt-5 pb-5 text-green-600'>
				Contact Us
			</h1>
			<ContactForm />
		</div>
	);
};

export default ContactUs;
