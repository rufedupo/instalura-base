import styled from 'styled-components'

const TitleStyle = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

const Title = (props) => {
  return <TitleStyle>{props.children}</TitleStyle>
}

export default Title
