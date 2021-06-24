import React from "react";
import { Navbar } from "./Navbar";

import { Container } from "../styles/components/header";

interface HeaderProps {
  handleTheme: () => void;
}

export function Header(props: HeaderProps) {
  return (
    <Container>
      <Navbar handleTheme={props.handleTheme} />
      <div>
        <h1>Olá, mundo!</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto nihil alias quas repudiandae blanditiis. Quibusdam placeat rerum soluta vitae officiis!</p>
      </div>
    </Container>
  );
}