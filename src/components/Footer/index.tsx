import {Wrapper, Sign, Anchor, Icon} from './styles'

const year = new Date().getFullYear()

const Footer = () => (
  <Wrapper>
    <Sign>Nil Késede &copy; {year}</Sign>
    <div>
      <Anchor first href="https://linkedin.com/in/nilkesede" title="linkedin">
        <Icon>&#xf0e1;</Icon>
      </Anchor>
      <Anchor href="https://github.com/nilkesede" title="github">
        <Icon>&#xf09b;</Icon>
      </Anchor>
      <Anchor href="https://twitter.com/nilkesede" title="twitter">
        <Icon>&#xf099;</Icon>
      </Anchor>
    </div>
  </Wrapper>
)

export default Footer
