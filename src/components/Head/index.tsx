import NextHead from 'next/head'
import {string} from 'prop-types'

const Head = ({
  title,
  description,
  keywords,
  uri,
  image
}) => (
  <NextHead>
    <title>{title}</title>
    <meta name="description" content={description}/>
    <meta name="keywords" content={keywords}/>

    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta name="theme-color" content="#222"/>

    <meta property="og:title" content={title}/>
    <meta property="og:description" content={description}/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content={uri}/>
    <meta property="og:image" content={image}/>
    <meta property="og:site_name" content={title}/>

    <meta name="twitter:title" content={title}/>
    <meta name="twitter:description" content={description}/>
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:image" content={image}/>

    <link rel="canonical" href={uri}/>
    <link rel="icon" href="/images/favicon.ico"/>
    <link rel="apple-touch-icon" href="/images/apple-touch-icon-180x180.png"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;700&display=swap"/>
    <link rel="preconnect" href="https://www.google-analytics.com"/>
  </NextHead>
)

export default Head
