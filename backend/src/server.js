const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/api/contact', async (req, res) => {
	const { name, email, phone, message } = req.body;

	try {
		let transporter = nodemailer.createTransport({
			service: 'gmail', // use your email service provider
			auth: {
				user: process.env.EMAIL_USER, // your email
				pass: process.env.EMAIL_PASS, // your email password or app password
			},
		});

		let mailOptions = {
			from: email,
			to: 'recipient-email@example.com',
			subject: `New contact from ${name} ${phone}`,
			text: message,
		};

		await transporter.sendMail(mailOptions);

		res.status(200).send('Email sent');
	} catch (error) {
		console.error('Error sending email:', error);
		res.status(500).send('Failed to send email');
	}
});

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '../../frontend/dist')));

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../../frontend/dist', 'index.html'));
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
