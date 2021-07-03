import { AnchorHTMLAttributes } from 'react';

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export function Anchor(props: AnchorProps) {
  return (
    <a 
      onMouseEnter={() => {
        const cursor = document.querySelector('#cursor');
        cursor?.classList.add('link');
      }}
      onMouseLeave={() => {
        const cursor = document.querySelector('#cursor');
        cursor?.classList.remove('link');
      }}
      {...props} 
    />
  )
}