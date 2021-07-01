import { Container } from '../styles/components/about';

type AboutProps = {
  id: string;
}

export function About(props: AboutProps) {
  return (
    <Container>
      <h2>Um pouco sobre mim</h2>
    </Container>
  );
}