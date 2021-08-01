import React from 'react'
import Footer from '@/components/Shared/Layout/Footer'
import Header from '@/components/Shared/Layout/Header'
import CTAFixed from '@/components/Modules/CTAFixed'

const Layout: React.FC = ({ children }) => {
	return (
		<>
			<a
				className="skip-content sr-only sr-only-focusable"
				href="#content-page"
				title="Saltar para o conteúdo principal"
			>
				ir para o conteúdo principal
			</a>
			<Header />
			<main className="wrapper" role="main" id="content-page">
				<h1 className="sr-only">Todo Mundo USA</h1>
				{children}
				<CTAFixed />
			</main>
			<Footer />
		</>
	)
}

export default Layout
