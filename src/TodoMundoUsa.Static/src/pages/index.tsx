import React from 'react'
import SEO from '@/components/Shared/SEO'
import TemplateHome from '@/components/Templates/Home'

// all functions in pages of Next must have export default
const Home: React.FC = () => {
	return (
		<>
			<SEO
				title="Homepage"
				image="https://via.placeholder.com/500"
				shouldExcludeTitleSuffix
			/>

			<TemplateHome />
		</>
	)
}

export default Home
