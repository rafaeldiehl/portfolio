import { useState } from 'react';

import logoIMG from '../assets/images/logo.png';

import { 
  MdKeyboardArrowDown,
  MdKeyboardArrowUp
} from 'react-icons/md';

import { Container } from '../styles/components/navbar';

import { Switch } from './Switch';
import { Menu } from './Menu';
import { Anchor } from './Anchor';

import { contactLinks } from '../utils/contactLinks';

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
      <Anchor href="/">
        <img 
          src={logoIMG}
          alt="Rafael Diehl" 
          title="Rafael Diehl" 
        />
      </Anchor>
      <div className={`flex-container ${showMenu ? 'active' : ''}`}>
        <ul className="main-items">
          <li>
            <Anchor href="/#about">
              Sobre
            </Anchor>
          </li>
          <li>
            <Anchor href="/#skills">
              Skills
            </Anchor>
          </li>
          <li>
            <Anchor href="/#projects">
              Projetos
            </Anchor>
          </li>
          <li 
            onMouseEnter={setIsDropdownTrue}
            onMouseLeave={setIsDropdownFalse}
            className="dropdown-container"
          >
            <Anchor href="/#contact">
              Contato
              {isDropdown ? (
                <MdKeyboardArrowUp />
              ) : (
                <MdKeyboardArrowDown />
              )}
            </Anchor>
            <ul className="dropdown">
              { contactLinks.map((contactLink) => {
                  return (
                    <li key={contactLink.title}>
                      <Anchor href={contactLink.link}>
                        {contactLink.icon}
                        <span>{contactLink.title}</span>
                      </Anchor>
                    </li>
                  )
                }) }
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