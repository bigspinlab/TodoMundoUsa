import React from 'react'
import Head from 'next/head'

interface SEOProps {
	title: string
	subtitle?: string
	description?: string
	image?: string
	shouldExcludeTitlePrefix?: boolean
	shouldIndexPage?: boolean
}

const SEO: React.FC<SEOProps> = ({
	title,
	subtitle,
	description,
	image,
	shouldExcludeTitlePrefix = false,
	shouldIndexPage = true
}: SEOProps) => {
	const pageTitle = `${
		!shouldExcludeTitlePrefix ? 'TodoMundoUSA :: ' : ''
	}${title}${subtitle ? ' :: ' + subtitle : ''}`
	const pageImage = image
		? `${process.env.NEXT_PUBLIC_SITE_URL}/${image}`
		: null
	return (
		<Head>
			<title>{pageTitle}</title>

			{description && <meta name="description" content={description} />}
			{image && <meta name="image" content={pageImage} />}
			{!shouldIndexPage && (
				<meta name="robots" content="noindex/nofollow" />
			)}

			<meta httpEquiv="x-ua-compatible" content="IE=edge,chrome=1" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<meta name="MobileOptimized" content="320" />
			<meta name="HandheldFriendly" content="True" />
			<meta name="theme-color" content="#ffffff" />
			<meta name="msapplication-TileColor" content="#164467" />
			<meta name="referrer" content="no-referrer-when-downgrade" />
			<meta name="google" content="notranslate" />
			<meta
				name="apple-mobile-web-app-status-bar-style"
				content="black-translucent"
			></meta>

			<meta property="og:title" content={pageTitle} />
			<meta property="og:description" content={description} />
			<meta property="og:locale" content="pt_BR" />
			<meta property="og:type" content="website" />
			<meta property="og:site_name" content={pageTitle} />
			<meta property="og:image" content={pageImage} />
			<meta property="og:image:secure_url" content={pageImage} />
			<meta property="og:image:alt" content="Thumbnail" />
			<meta property="og:image:type" content="image/png" />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />

			<meta name="msapplication-navbutton-color" content="#000000" />
			<meta name="mobile-web-app-capable" content="yes" />
			<meta name="apple-mobile-web-app-capable" content="yes" />
			<meta
				name="apple-mobile-web-app-status-bar-style"
				content="black-translucent"
			/>
			<meta name="application-name" content={pageTitle} />
			<meta name="msapplication-TileColor" content="#FFFFFF" />
			<meta name="msapplication-TileImage" content="mstile-144x144.png" />
		</Head>
	)
}

export default SEO
