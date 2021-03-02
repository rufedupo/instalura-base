import React from 'react';
import { Button } from '../Button';
import Logo from '../../../theme/Logo';
import { MenuWrapper } from './styles/MenuWrapper';
import Text from '../../foundations/Text';

const links = [
  {
    text: 'Home',
    url: '/',
  },
  {
    text: 'Perguntas frequentes',
    url: '/faq',
  },
  {
    text: 'Sobre',
    url: '/about',
  },
];

const Menu = () => (
  <MenuWrapper>
    <MenuWrapper.LeftSide>
      <Logo />
    </MenuWrapper.LeftSide>
    <MenuWrapper.CentralSide>
      {
          links.map((link) => (
            <li key={link.url}>
              <Text tag="a" variant="smallestException" href={link.url}>
                {link.text}
              </Text>
            </li>
          ))
        }
    </MenuWrapper.CentralSide>
    <MenuWrapper.RightSide>
      <Button ghost variant="secondary.main">
        Entrar
      </Button>
      <Button variant="primary.main">
        Cadastrar
      </Button>
    </MenuWrapper.RightSide>
  </MenuWrapper>
);

export default Menu;
