import styled from 'styled-components'

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
  Wrapper,
  Sign,
  Social
}
