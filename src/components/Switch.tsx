import React, { useContext } from 'react';

import { ThemeContext } from 'styled-components';

import { Container } from '../styles/components/switch';

interface SwitchProps {
  handleTheme: () => void;
}

export function Switch(props: SwitchProps) {
  const { title } = useContext(ThemeContext);

  return (
    <Container
      onMouseEnter={() => {
        const cursor = document.querySelector('#cursor');
        cursor?.classList.add('link');
      }}
      onMouseLeave={() => {
        const cursor = document.querySelector('#cursor');
        cursor?.classList.remove('link');
      }}
    >
      <input 
        type="checkbox"
        checked={title === 'light' ? true : false}
      />
      <span
        onClick={props.handleTheme}
        className="slider"
      ></span>
    </Container>
  );
}