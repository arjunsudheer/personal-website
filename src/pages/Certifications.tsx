import InfoCard from "../components/InfoCard";

const Certifications = () => {
	return (
		<>
			<InfoCard
				title='Machine Learning'
				keyHighlights={["Offered By: DeepLearning.AI"]}
				topSkills={["Supervised Learning", "Unsupervised Learning"]}
				textRight={false}
				url='https://www.coursera.org/account/accomplishments/specialization/TFVH59H5YMEJ?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=s12n'
				internalLink={false}
			/>
			<InfoCard
				title='Google Cybersecurity Professional Certificate'
				keyHighlights={["Offered By: Google"]}
				topSkills={["Incident Management and Response"]}
				textRight={true}
				url='https://www.coursera.org/account/accomplishments/professional-cert/M3PWD2B9M3YX?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof'
				internalLink={false}
			/>
		</>
	);
};

export default Certifications;
