import React from 'react';

import logoIMG from '../assets/images/logo.png';

import { 
  HiOutlineHome,
  HiOutlineIdentification,
  HiOutlineTerminal,
  HiOutlineCube,
  HiOutlineChatAlt2
} from 'react-icons/hi';

import { Container } from '../styles/components/navbar';

import { Switch } from './Switch';
import { Anchor } from './Anchor';

interface NavbarProps {
  handleTheme: () => void;
}

export function Navbar(props: NavbarProps) {
  return (
    <Container>
      <img src={logoIMG} alt="" />
      <ul className="main-items">
        <li>
          <Anchor href="#">
            Sobre
          </Anchor>
        </li>
        <li>
          <Anchor href="#">
            Skills
          </Anchor>
        </li>
        <li>
          <Anchor href="#">
            Projetos
          </Anchor>
        </li>
        <li>
          <Anchor href="#">
            Contato
          </Anchor>
        </li>
      </ul>
      <Switch handleTheme={props.handleTheme} />
    </Container>
  );
}