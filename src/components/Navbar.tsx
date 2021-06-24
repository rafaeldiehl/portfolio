import React from 'react';

import logoIMG from '../assets/images/logo.svg';

import { 
  HiOutlineHome,
  HiOutlineIdentification,
  HiOutlineTerminal,
  HiOutlineCube,
  HiOutlineChatAlt2
} from 'react-icons/hi';

import { Container } from '../styles/components/navbar';
import { Switch } from './Switch';

interface NavbarProps {
  handleTheme: () => void;
}

export function Navbar(props: NavbarProps) {
  return (
    <Container>
      <img src={logoIMG} alt="" />
      <ul className="main-items">
        <li>
          <a href="#" className="checked">
            <HiOutlineHome />
            <span className="item-desc">Início</span>
          </a>
        </li>
        <li>
          <a href="#">
            <HiOutlineIdentification />
            <span className="item-desc">Sobre</span>
          </a>
        </li>
        <li>
          <a href="#">
            <HiOutlineTerminal />
            <span className="item-desc">Skills</span>
          </a>
        </li>
        <li>
          <a href="#">
            <HiOutlineCube />
            <span className="item-desc">Projetos</span>
          </a>
        </li>
        <li>
          <a href="#">
            <HiOutlineChatAlt2 />
            <span className="item-desc">Contato</span>
          </a>
        </li>
      </ul>
      <Switch handleTheme={props.handleTheme} />
    </Container>
  );
}