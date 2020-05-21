import Head from '../components/Head'
import Footer from '../components/Footer'

const IndexPage = () => (
  <div className="wrapper">
    <Head
      title="404 - Page not found | Nil Késede"
      description="404 - Page not found"
      keywords="javascript, developer, development, web, mobile, full stack, nil, késede, kesede"
      uri="https://nilkesede.sh/"
      image="https://www.gravatar.com/avatar/9a5a4ef32d505f64a4343653c214c9f8?s=1080"
    />

    <div className="container">
      <h1 className="title">404 - Page not found</h1>
    </div>

    <Footer/>
  </div>
)

export default IndexPage
