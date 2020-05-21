import NextHead from 'next/head'

const uri = "https://nilkesede.sh/"
const image = "https://nilkesede.sh/images/me32.jpg"

const Head = ({
  title,
  description,
  keywords
}) => (
  <NextHead>
    <title>{title}</title>
    <meta name="description" content={description}/>
    <meta name="keywords" content={keywords}/>
    <meta name="Author" content="Nil Késede"/>

    <meta httpEquiv='X-UA-Compatible' content='IE=edge'/>
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
    <meta name="twitter:site" content="@nilkesede"/>
    <meta name="twitter:creator" content="@nilkesede"/>

    <link rel="manifest" href="/manifest.json"/>
    <link rel="canonical" href={uri}/>
    <link rel="icon" href="/images/favicon.ico"/>
    <link rel="apple-touch-icon" href="/images/icons/icon-192x192.png"/>
    <link rel="preconnect" href="https://www.google-analytics.com"/>
  </NextHead>
)

export default Head
