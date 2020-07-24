import styled from 'styled-components'

const Anchor = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer'
})`
  line-height: 1;
  font-size: 25px;
  margin-left: 15px;
  display: inline-block;
  ${props => props.first && 'margin-left: 0;'}
`

const Icon = styled.i`
  font-family: 'fontello', sans-serif;
  font-style: normal;
  font-weight: normal;
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 50px;
  padding: 20px 30px;
`

const Sign = styled.div`
  font-size: 12px;
  line-height: 1;
`

export {
  Anchor,
  Icon,
  Wrapper,
  Sign
}
