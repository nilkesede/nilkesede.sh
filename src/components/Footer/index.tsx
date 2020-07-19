import Icon from '../Icon'
import IconAnchor from '../IconAnchor'
import {Wrapper, Sign, Social} from './styles'

const year = new Date().getFullYear()

const Footer = () => (
  <Wrapper>
    <Sign>Nil Késede &copy; {year}</Sign>
    <Social>
      <IconAnchor href="https://github.com/nilkesede" title="github">
        <Icon>&#xf09b;</Icon>
      </IconAnchor>
      <IconAnchor href="https://twitter.com/nilkesede" title="twitter">
        <Icon>&#xf099;</Icon>
      </IconAnchor>
      <IconAnchor href="https://linkedin.com/in/nilkesede" title="linkedin">
        <Icon>&#xf0e1;</Icon>
      </IconAnchor>
    </Social>
  </Wrapper>
)

export default Footer
