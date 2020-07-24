import {Wrapper, Head, Container, Avatar, Title, Subtitle, Footer} from '../components'

const IndexPage = () => (
  <Wrapper>
    <Head
      title="Nil Késede | Software Developer"
      description="A Software Developer focused on creating and contribute to high availability apps and improve the user experience with modern tech stacks."
      keywords="javascript, developer, development, web, mobile, full stack, nil, késede, kesede"
    />

    <Container>
      <Avatar
        srcSet="/images/me.jpg, /images/me@2x.jpg 2x, /images/me@3x.jpg 3x"
        src="/images/me.jpg"
        alt="Nil Késede's avatar image"
      />

      <Title>Hi, I&#39;m Nil Késede!</Title>

      <Subtitle>
        A Software Developer based in Fortaleza, Brazil, focused on creating and contribute to high availability apps and improve the user experience with modern tech stacks.{/*
        */}<br/><br/>{' '}
        I’m currently working at the Casa Magalhães&#39;s Innovation Core, a commercial automation company.{/*
        */}<br/><br/>{' '}
        Feel free to reach me out on social networks, or you can write to me through <a href="mailto:me@nilkesede.sh" target="_blank" rel="noopener noreferrer" title="email" className="anchor">me@nilkesede.sh</a>.
      </Subtitle>
    </Container>

    <Footer/>
  </Wrapper>
)

export default IndexPage
