import React from "react";
import GlobalStyle from "../styles/global";

import { Link } from "react-router-dom";

import { Header } from '../components/Header';
import { Switch } from "../components/Switch";

interface HomeProps {
  handleTheme: () => void;
}

export function Home(props: HomeProps) {
  return (
    <div id="home">
      <GlobalStyle />
      <Header />
      <Switch handleTheme={props.handleTheme} />
      <section></section>
      <section></section>
      <button>
        <Link to="test">Aaa</Link>
      </button>
    </div>
  );
}