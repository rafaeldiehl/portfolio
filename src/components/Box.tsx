import { Container } from "../styles/components/box";

type BoxProps = {
  children: React.ReactNode;
  title: string;
  color?: string;
}

export function Box(props: BoxProps) {
  return (
    <Container title={props.title}>
      <span style={{ color: props.color }}>{props.children}</span>
    </Container>
  );
}