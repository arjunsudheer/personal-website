import InfoCard from "../reusable_components/InfoCard";

const Certifications = () => {
	return (
		<>
			<h3 className='underline text-lg m-3 dark:text-white'>Featured</h3>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				<InfoCard
					title='Machine Learning'
					description='Offered By: DeepLearning.AI'
					url='https://www.coursera.org/account/accomplishments/specialization/TFVH59H5YMEJ?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=s12n'
					displayAnimation={false}
				/>
				<InfoCard
					title='Google Cybersecurity Professional Certificate'
					description='Offered By: Google'
					url='https://www.coursera.org/account/accomplishments/professional-cert/M3PWD2B9M3YX?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof'
					displayAnimation={false}
				/>
			</div>

			<h3 className='underline text-lg m-3 dark:text-white'>LinkedIn Learning</h3>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				<InfoCard
					title='Learning Docker'
					description='Offered By: LinkedIn'
					url='https://www.linkedin.com/learning/certificates/b466cc351d6a5ac5ce157068217f6d5eafa5bc267bb9fe3b9501cdd5bb5af744?u=2071660'
					displayAnimation={false}
				/>
				<InfoCard
					title='Agile Software Development: Scrum for Developers'
					description='Offered By: LinkedIn'
					url='https://www.linkedin.com/learning/certificates/643112edd8139ad7819825675f3a5a9f3b4ba3dbbf3440a3b68b87e506381b13?u=2071660'
					displayAnimation={false}
				/>
				<InfoCard
					title='Learning Bash Scripting'
					description='Offered By: LinkedIn'
					url='https://www.linkedin.com/learning/certificates/ac96bc9bd5ce1b49fa3902ee0bd9a9b25e7a3c5f01c26aa8261b8aa9ebe53732?u=2071660'
					displayAnimation={false}
				/>
				<InfoCard
					title='Python Data Structures and Algorithms'
					description='Offered By: LinkedIn'
					url='https://www.linkedin.com/learning/certificates/dd85aa04e1565a911f31ea9f84bfa1f616cbd52366d12eaabf8feabd43308ee5?u=2071660'
					displayAnimation={false}
				/>
				<InfoCard
					title='Advanced Python'
					description='Offered By: LinkedIn'
					url='https://www.linkedin.com/learning/certificates/2fbe4f1864055f88f8c3fc1db8767c9f4fc65a02caa74ccda3feef9138083fcc?u=2071660'
					displayAnimation={false}
				/>
			</div>

			<h3 className='underline text-lg m-3 dark:text-white'>Coursera</h3>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				<InfoCard
					title='Responsive Web Design'
					description='Offered By: Unviersity of London'
					url='https://www.coursera.org/account/accomplishments/verify/RU9U6CKD3MQP?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course'
					displayAnimation={false}
				/>
				<InfoCard
					title='Responsive Website Basics: Code with HTML, CSS, and JavaScript'
					description='Offered By: Unviersity of London'
					url='https://www.coursera.org/account/accomplishments/verify/HEQLWVFLAGUR?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course'
					displayAnimation={false}
				/>
			</div>
		</>
	);
};

export default Certifications;
