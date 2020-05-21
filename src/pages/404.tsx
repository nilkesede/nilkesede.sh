import Head from '../components/Head'

const calcAge = date => Math.abs(new Date(Date.now() - date).getFullYear() - 1970);
const age = calcAge(new Date('94'))
const year = new Date().getFullYear()

const IndexPage = () => (
  <div className="wrapper">
    <Head
      title="Home | Next.js + TypeScript Example"
      description="I'm a software developer with experience in web and mobile"
      keywords="javascript, developer, development, web, mobile, full stack, nil, késede, kesede"
      uri="https://nilkesede.sh/"
      image="https://www.gravatar.com/avatar/9a5a4ef32d505f64a4343653c214c9f8?s=1080"
    />

    <div className="container">
      <h1 className="title">404 - Page not found</h1>
    </div>
    <div className="footer">
      <div className="footer__sign">Nil Késede &copy; {year}</div>
      <div className="footer__social">
        <a href="https://github.com/nilkesede" target="_blank" rel="noopener noreferrer" title="github" className="footer__social__anchor"><i className="icon icon-github-circled">&#xf09b;</i></a>
        <a href="https://linkedin.com/in/nilkesede" target="_blank" rel="noopener noreferrer" title="linkedin" className="footer__social__anchor"><i className="icon icon-linkedin">&#xf0e1;</i></a>
        <a href="https://twitter.com/nilkesede" target="_blank" rel="noopener noreferrer" title="twitter" className="footer__social__anchor"><i className="icon icon-twitter">&#xf099;</i></a>
        <a href="https://instagram.com/nilkesede" target="_blank" rel="noopener noreferrer" title="instagram" className="footer__social__anchor"><i className="icon icon-instagram">&#xf16d;</i></a>
      </div>
    </div>
  </div>
)

export default IndexPage
