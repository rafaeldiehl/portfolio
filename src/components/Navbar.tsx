import { useState } from 'react';

import logoIMG from '../assets/images/logo.png';

import { 
  FiMail,
  FiGithub,
  FiLinkedin
} from 'react-icons/fi';

import { 
  MdKeyboardArrowDown,
  MdKeyboardArrowUp
} from 'react-icons/md';

import { Container } from '../styles/components/navbar';

import { Switch } from './Switch';
import { Menu } from './Menu';
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
    const block = document.querySelector('.block-bg');
    block?.classList.toggle('active');
    showMenu ? setShowMenu(false) : setShowMenu(true);
  }

  return (
    <Container>
      <img 
        src={logoIMG}
        alt="Rafael Diehl" 
        title="Rafael Diehl" 
      />
      <div className={`flex-container ${showMenu ? 'active' : ''}`}>
        <ul className="main-items">
          <li>
            <Anchor href="/#about">
              Sobre
            </Anchor>
          </li>
          <li>
            <Anchor href="#skills">
              Skills
            </Anchor>
          </li>
          <li>
            <Anchor href="#projects">
              Projetos
            </Anchor>
          </li>
          <li 
            onMouseEnter={setIsDropdownTrue}
            onMouseLeave={setIsDropdownFalse}
            className="dropdown-container"
          >
            <Anchor href="#contact">
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
                  <span>E-mail</span>
                </Anchor>
              </li>
              <li>
                <Anchor
                  href="https://github.com/rafaeldiehl"
                  target="_blank"
                >
                  <FiGithub />
                  <span>Github</span>
                </Anchor>
              </li>
              <li>
                <Anchor
                  href="https://www.linkedin.com/in/rafael-juliani-diehl-94317a198/"
                  target="_blank"
                >
                  <FiLinkedin />
                  <span>Linkedin</span>
                </Anchor>
              </li>
            </ul>
          </li>
        </ul>
        <Menu
          className={`hamburger ${showMenu ? 'open' : ''}`}
          onClick={handleShowMenu}
        />
        <Switch handleTheme={props.handleTheme} />
      </div>
    </Container>
  );
}