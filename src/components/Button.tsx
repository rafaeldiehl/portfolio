import { ButtonHTMLAttributes } from 'react';

import { Container } from '../styles/components/button';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button(props: ButtonProps) {
  return (
    <Container 
      className="button" 
      onMouseEnter={() => {
        const cursor = document.querySelector('#cursor');
        cursor?.classList.add('link');
      }}
      onMouseLeave={() => {
        const cursor = document.querySelector('#cursor');
        cursor?.classList.remove('link');
      }}
      {...props}
    >
      {props.children}
      <span className="border"></span>
    </Container>
  );
}