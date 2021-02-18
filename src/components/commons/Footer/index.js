import styled from 'styled-components'

const FooterWrapper = styled.footer`
  padding: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding-right: 28px;
  padding-left: 28px;

  img {
    width: 58px;
    margin-right: 23px;
  }

  a {
    color: ${({ theme }) => theme.palette.primary.main.color};
    text-decoration: none;
  }
`

const Footer = (props) => {
  return (
    <FooterWrapper {...props}>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo.1570550707.svg" />
      </a>

      <p>
        Orgulhosamente criado durante
        {' '}
        o
        {' '}
        <a href="https://www.alura.com.br/">
          <span>Bootcamp Alura JAM Stack</span>
        </a>
      </p>
    </FooterWrapper>
  )
}

export default Footer