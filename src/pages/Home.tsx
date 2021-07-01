import React, { useEffect } from 'react';
import GlobalStyle from '../styles/global';

import { Link } from 'react-router-dom';

import { About } from '../components/About';
import { Header } from '../components/Header';
import { Cursor } from '../components/Cursor';

interface HomeProps {
  handleTheme: () => void;
}

export function Home(props: HomeProps) {
  return (
    <div id="home">
      <GlobalStyle />
      <Cursor />
      <Header handleTheme={props.handleTheme} />
      <About id="about" />
    </div>
  );
}