import { useState } from 'react';

import logoIMG from '../assets/images/logo.png';

import { 
  HiMenuAlt2
} from 'react-icons/hi';

import {
  AiFillGithub,
  AiFillLinkedin
} from 'react-icons/ai';

import { FiMail } from 'react-icons/fi';

import { 
  MdKeyboardArrowDown,
  MdKeyboardArrowUp
} from 'react-icons/md';

import { Container } from '../styles/components/navbar';

import { Switch } from './Switch';
import { Anchor } from './Anchor';

interface NavbarProps {
  handleTheme: () => void;
}

export function Navbar(props: NavbarProps) {
  const [isDropdown, setIsDropdown] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  function setIsDropdownTrue() {
    setIsDropdown(true);
  }

  function setIsDropdownFalse() {
    setIsDropdown(false);
  }

  function handleShowMenu() {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  }

  return (
    <Container>
      <img 
        src={logoIMG}
        alt="Rafael Diehl" 
        title="Rafael Diehl" 
      />
      <div className={`flex-container ${showMenu && 'active'}`}>
        <ul className="main-items">
          <li>
            <Anchor href="#about">
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
          <li 
            onMouseEnter={setIsDropdownTrue}
            onMouseLeave={setIsDropdownFalse}
            className="dropdown-container"
          >
            <Anchor href="#">
              Contato
              {isDropdown ? (
                <MdKeyboardArrowUp />
              ) : (
                <MdKeyboardArrowDown />
              )}
            </Anchor>
            <ul className="dropdown">
              <li>
                <Anchor href="mailto:rafaeljuliani1984@gmail.com">
                  <FiMail />
                  E-mail
                </Anchor>
              </li>
              <li>
                <Anchor
                  href="https://github.com/rafaeldiehl"
                  target="_blank"
                >
                  <AiFillGithub />
                  Github
                </Anchor>
              </li>
              <li>
                <Anchor
                  href="https://www.linkedin.com/in/rafael-juliani-diehl-94317a198/"
                  target="_blank"
                >
                  <AiFillLinkedin />
                  Linkedin
                </Anchor>
              </li>
            </ul>
          </li>
        </ul>
        <HiMenuAlt2
          className="hamburger" 
          onClick={handleShowMenu}
        />
        <Switch handleTheme={props.handleTheme} />
      </div>
    </Container>
  );
}