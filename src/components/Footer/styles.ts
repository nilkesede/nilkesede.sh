import styled from 'styled-components'

const Anchor = styled.a.attrs({
  target: '_blank',
  rel: 'noopener noreferrer'
})`
  width: 32px;
  height: 32px;
  font-size: 25px;
  padding: 0 5px;
  margin: 0 2.5px;
  display: inline-block;
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
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background-clip: padding-box;
  margin-top: 50px;
  padding: 20px 30px;
  overflow: hidden;
`

const Sign = styled.div`
  font-size: 12px;
`

const Social = styled.div`
  margin-right: -7.5px;
`

export {
  Anchor,
  Icon,
  Wrapper,
  Sign,
  Social
}
