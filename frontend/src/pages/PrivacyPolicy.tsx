import React from 'react';
import { useEffect } from 'react';

const PrivacyPolicy: React.FC = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className='max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8'>
			<h1 className='text-4xl font-bold text-gray-900 mb-8'>Privacy Policy</h1>
			<p className='text-sm text-gray-600 mb-4'>Effective date: Aug 6, 2024</p>

			<p className='mb-6 text-lg text-gray-700'>
				<strong>Nick Cronin LLC, DBA Seniors Choice Insurance</strong> does not
				share personal information with third parties for marketing/promotional
				purposes.
			</p>

			<p className='mb-6 text-lg text-gray-700'>
				<strong>Nick Cronin LLC, DBA Seniors Choice Insurance</strong> (“us”,
				“we”, or “our”) operates the srchoiceinsurance.com website (the
				“Service”).
			</p>

			<p className='mb-6 text-lg text-gray-700'>
				This page informs you of our policies regarding the collection, use, and
				disclosure of personal data when you use our Service and the choices you
				have associated with that data.
			</p>

			<p className='mb-6 text-lg text-gray-700'>
				We use your data only to provide you with the information you request
				pertaining to Medicare insurance-related plans and services. Your
				personal information is not shared with anyone outside of Seniors Choice
				and is kept stored securely in our system.
			</p>

			<h2 className='text-2xl font-semibold text-gray-800 mt-10 mb-4'>
				Information Collection And Use
			</h2>
			<p className='mb-6 text-lg text-gray-700'>
				We collect only basic information on our contact forms and email to
				provide Medicare insurance-related services such as plan info and
				quotes.
			</p>

			<h3 className='text-xl font-semibold text-gray-800 mt-8 mb-4'>
				Types of Data Collected
			</h3>

			<h4 className='text-lg font-semibold text-gray-800 mt-6 mb-4'>
				Personal Data
			</h4>
			<p className='mb-6 text-lg text-gray-700'>
				While using our Service, we may ask you to provide us with certain
				personally identifiable information that can be used to contact or
				identify you (“Personal Data”). Personally identifiable information may
				include, but is not limited to:
			</p>
			<ul className='list-disc list-inside mb-6 text-lg text-gray-700'>
				<li>Email address</li>
				<li>First name and last name</li>
				<li>Phone number</li>
				<li>Address, State, Province, ZIP/Postal code, City</li>
			</ul>

			<h4 className='text-lg font-semibold text-gray-800 mt-6 mb-4'>
				Use of Data
			</h4>
			<p className='mb-6 text-lg text-gray-700'>
				We use the data collected to provide Medicare insurance information and
				plan quotes. Your data is never shared or sold to third parties for
				marketing purposes.
			</p>

			<h2 className='text-2xl font-semibold text-gray-800 mt-10 mb-4'>
				Disclosure Of Data
			</h2>
			<p className='mb-6 text-lg text-gray-700'>
				Seniors Choice Insurance may disclose your Personal Data as required by
				law, in the good faith belief that such action is necessary to:
			</p>
			<ul className='list-disc list-inside mb-6 text-lg text-gray-700'>
				<li>To comply with a legal obligation</li>
				<li>
					To protect and defend the rights or property of Nick Cronin LLC, DBA
					Seniors Choice Insurance
				</li>
				<li>
					To prevent or investigate possible wrongdoing in connection with the
					Service
				</li>
				<li>
					To protect the personal safety of users of the Service or the public
				</li>
				<li>To protect against legal liability</li>
			</ul>

			<h2 className='text-2xl font-semibold text-gray-800 mt-10 mb-4'>
				Analytics
			</h2>
			<p className='mb-6 text-lg text-gray-700'>
				We may use third-party Service Providers to monitor and analyze the use
				of our Service. This service only monitors the number of visits and
				activity on the website. It shows only general location such as city and
				state of the visitors.
			</p>

			<h3 className='text-xl font-semibold text-gray-800 mt-8 mb-4'>
				Google Analytics
			</h3>
			<p className='mb-6 text-lg text-gray-700'>
				Google Analytics is a web analytics service offered by Google that
				tracks and reports website traffic. Google uses the data collected to
				track and monitor the use of our Service. This data is shared with other
				Google services. Google may use the collected data to contextualize and
				personalize the ads of its own advertising network.
			</p>
			<p className='mb-6 text-lg text-gray-700'>
				You can opt-out of having made your activity on the Service available to
				Google Analytics by installing the Google Analytics opt-out browser
				add-on. The add-on prevents the Google Analytics JavaScript (ga.js,
				analytics.js, and dc.js) from sharing information with Google Analytics
				about visits activity.
			</p>
			<p className='mb-6 text-lg text-gray-700'>
				For more information on the privacy practices of Google, please visit
				the Google Privacy & Terms web page:{' '}
				<a
					href='https://policies.google.com/privacy?hl=en'
					className='text-blue-500 hover:underline'>
					https://policies.google.com/privacy?hl=en
				</a>
			</p>

			<h2 className='text-2xl font-semibold text-gray-800 mt-10 mb-4'>
				Links To Other Sites
			</h2>
			<p className='mb-6 text-lg text-gray-700'>
				Our Service may contain links to other sites that are not operated by
				us. If you click on a third-party link, you will be directed to that
				third party’s site. We strongly advise you to review the Privacy Policy
				of every site you visit.
			</p>
			<p className='mb-6 text-lg text-gray-700'>
				We have no control over and assume no responsibility for the content,
				privacy policies, or practices of any third-party sites or services.
			</p>

			<h2 className='text-2xl font-semibold text-gray-800 mt-10 mb-4'>
				Children’s Privacy
			</h2>
			<p className='mb-6 text-lg text-gray-700'>
				Our Service does not address anyone under the age of 18 (“Children”).
			</p>
			<p className='mb-6 text-lg text-gray-700'>
				We do not knowingly collect personally identifiable information from
				anyone under the age of 18. If you are a parent or guardian and you are
				aware that your Children has provided us with Personal Data, please
				contact us. If we become aware that we have collected Personal Data from
				children without verification of parental consent, we take steps to
				remove that information from our servers.
			</p>

			<h2 className='text-2xl font-semibold text-gray-800 mt-10 mb-4'>
				Contact Us
			</h2>
			<p className='mb-6 text-lg text-gray-700'>
				If you have any questions about this Privacy Policy, please contact us:
			</p>
			<ul className='list-none mb-6 text-lg text-gray-700'>
				<li>
					<strong>By email:</strong> agency@srchoice.us
				</li>
				<li>
					<strong>By phone number:</strong> 866-724-4294
				</li>
				<li>
					<strong>By mail:</strong> 14826 S Ashland Ridge Dr., Herriman, UT
					84096
				</li>
			</ul>
		</div>
	);
};

export default PrivacyPolicy;
