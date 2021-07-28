import React from 'react'
import SEO from '@/components/Shared/SEO'
import ButtonImageBox from '@/components/Elements/ButtonImageBox'
import ButtonLeadBox from '@/components/Elements/ButtonLeadBox'
import Headline from '@/components/Elements/Headline'

// all functions in pages of Next must have export default
const Home: React.FC = () => {
	return (
		<>
			<SEO
				title="Homepage"
				image="https://via.placeholder.com/500"
				shouldExcludeTitleSuffix
			/>

			<ButtonImageBox
				buttonImage="https://via.placeholder.com/500"
				buttonText="Button"
				href="/"
			></ButtonImageBox>
			<ButtonLeadBox
				href="https://www.google.com"
				leadText="Google"
			></ButtonLeadBox>
			<Headline mainHeadline="Headline"></Headline>

			<Headline smallHeadline="small Headline"></Headline>
		</>
	)
}

export default Home
