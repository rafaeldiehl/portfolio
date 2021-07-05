import { Container } from '../styles/components/menu';

type MenuProps = {
  id?: string;
  className?: string;
  onClick: () => void;
}

export function Menu(props: MenuProps) {
  return (
    <Container {...props}>
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
    </Container>
  )
}