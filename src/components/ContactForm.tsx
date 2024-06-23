import React, { useState } from 'react';

const ContactForm: React.FC = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		message: '',
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Handle form submission below
		console.log('Form submitted', formData);
		setFormData({
			name: '',
			email: '',
			phone: '',
			message: '',
		});
	};

	return (
		<div className='bg-[#F8F8F8] p-6 rounded-lg shadow-lg lg:w-1/2 mx-auto mb-10'>
			<form onSubmit={handleSubmit} className='space-y-4'>
				<div>
					<label
						htmlFor='name'
						className='block text-lg font-medium text-gray-700'>
						Name
					</label>
					<input
						type='text'
						id='name'
						name='name'
						value={formData.name}
						onChange={handleChange}
						required
						className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500'
					/>
				</div>
				<div>
					<label
						htmlFor='email'
						className='block text-lg font-medium text-gray-700'>
						Email
					</label>
					<input
						type='email'
						id='email'
						name='email'
						value={formData.email}
						onChange={handleChange}
						required
						className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500'
					/>
				</div>
				<div>
					<label
						htmlFor='phone'
						className='block text-lg font-medium text-gray-700'>
						Phone
					</label>
					<input
						type='tel'
						id='phone'
						name='phone'
						value={formData.phone}
						onChange={handleChange}
						required
						className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500'
					/>
				</div>
				<div>
					<label
						htmlFor='message'
						className='block text-lg font-medium text-gray-700'>
						Message
					</label>
					<textarea
						id='message'
						name='message'
						value={formData.message}
						onChange={handleChange}
						required
						className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500'
					/>
				</div>
				<div className='text-center'>
					<button
						type='submit'
						className='w-full md:w-auto px-4 py-2 bg-green-600 text-white font-semibold rounded-md shadow-md hover:bg-green-700 transition duration-300'>
						Send Message
					</button>
				</div>
			</form>
		</div>
	);
};

export default ContactForm;
