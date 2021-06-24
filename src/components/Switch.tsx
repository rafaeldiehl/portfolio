import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

interface SwitchProps {
  handleTheme: () => void;
}

export function Switch(props: SwitchProps) {
  const { title } = useContext(ThemeContext);

  return (
    <button onClick={props.handleTheme}>{title}</button>
  );
}