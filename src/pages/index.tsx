import {Container, Head, Icon, IconAnchor, Wrapper} from '../components'

const IndexPage = () => (
  <Wrapper>
    <Head
      title="Nil Késede | Software Developer"
      description="A Software Developer focused on creating and contribute to high availability apps and improve the user experience with modern tech stacks."
      keywords="javascript, developer, development, web, mobile, full stack, nil, késede, kesede"
    />

    <Container>
      <div>
        <IconAnchor
          href="https://linkedin.com/in/nilkesede"
          title="linkedin"
          size="50"
          space="20"
        >
          <Icon>&#xf0e1;</Icon>
        </IconAnchor>
        <IconAnchor
          href="https://github.com/nilkesede"
          title="github"
          size="50"
          space="20"
        >
          <Icon>&#xf09b;</Icon>
        </IconAnchor>
        <IconAnchor
          href="https://twitter.com/nilkesede"
          title="twitter"
          size="50"
          space="20"
        >
          <Icon>&#xf099;</Icon>
        </IconAnchor>
      </div>
    </Container>
  </Wrapper>
)

export default IndexPage
