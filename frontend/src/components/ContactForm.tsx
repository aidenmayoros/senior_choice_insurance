import React, { useState } from 'react';
import axios from 'axios';

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

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// Cast e.target to HTMLFormElement
		const form = e.target as HTMLFormElement;

		const formData = Object.fromEntries(new FormData(form).entries());

		try {
			await axios.post(
				'https://www.form-to-email.com/api/s/88WbOOmXRqJc',
				JSON.stringify(formData), // The request body
				{
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);
			// Maybe show on the frontend somewhere that the form was successfully submitted?
		} catch (error) {
			// Maybe show on the frontend somewhere that the form DID NOT submit correctly?
			console.error('Error submitting the form', error);
			alert('There was an issue sending your message.');
		}

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
						className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#72F072] focus:border-[#72F072]'
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
						className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#72F072] focus:border-[#72F072]'
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
						className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#72F072] focus:border-[#72F072]'
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
						className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#72F072] focus:border-[#72F072]'
					/>
				</div>
				<div className='text-center'>
					<button
						type='submit'
						className='w-full md:w-auto px-4 py-2 bg-[#72F072] font-semibold rounded-md shadow-md hover:bg-green-700 hover:text-white transition duration-300'>
						Send Message
					</button>
				</div>
			</form>
		</div>
	);
};

export default ContactForm;
