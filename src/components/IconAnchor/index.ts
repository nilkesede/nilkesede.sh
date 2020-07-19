import styled from 'styled-components'

export default styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer'
})`
  width: ${props => props.size || 25}px;
  height: ${props => props.size || 25}px;
  font-size: ${props => props.size || 25}px;
  padding: 0;
  margin: 0 ${props => props.space || 10}px;
  display: inline-block;
  line-height: 1;
  text-align: center;
`
