import { Link } from 'react-router-dom';

import GlobalStyle from "../styles/global";

export function Test() {
  return (
    <div>
      <GlobalStyle />
      <h1>Teste</h1>
      <a href="/#about">Sobre</a>
    </div>
  );
}