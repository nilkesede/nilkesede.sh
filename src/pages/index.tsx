import Head from '../components/Head'
import Footer from '../components/Footer'

const calcAge = date => Math.abs(new Date(Date.now() - date).getFullYear() - 1970);
const age = calcAge(new Date('94'))

const IndexPage = () => (
  <div className="wrapper">
    <Head
      title="Nil Késede | Software Developer"
      description={`A Software Developer focused on creating and contribute to high availability apps and improve the user experience with modern tech stacks.`}
      keywords="javascript, developer, development, web, mobile, full stack, nil, késede, kesede"
      uri="https://nilkesede.sh/"
      image="https://nilkesede.sh/images/me@3x.webp"
    />

    <div className="container">
      <img
        srcSet="/images/me.webp, /images/me@2x.webp 2x, /images/me@3x.webp 3x"
        src="/images/me.webp"
        alt="Nil Késede's avatar image"
        width="200"
        className="avatar"
      />

      <h1 className="title">Hi, I'm Nil Késede!</h1>
      <p className="subtitle">
        A {age}yo Software Developer based in Fortaleza, Brazil, focused on creating and contribute to high availability apps and improve the user experience with modern tech stacks.
        <br/><br/>
        I’m currently working at the Innovation Core of Casa Magalhães, a commercial automation company.
        <br/><br/>
        Feel free to reach me out on social networks, or you can write to me through <a href="mailto:me@nilkesede.sh" target="_blank" rel="noopener noreferrer" title="email" className="anchor">me@nilkesede.sh</a>.
      </p>
    </div>

    <Footer/>
  </div>
)

export default IndexPage
