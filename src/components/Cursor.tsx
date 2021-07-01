import { useMousePosition } from '../hooks/useMousePosition';

import { Container } from '../styles/components/cursor';

export function Cursor() {
  const { x, y } = useMousePosition();

  return (
    <Container>
      <div id="cursor">
        <div
          style={{ left: `${x}px`, top: `${y}px` }}
          className="ring"
        ></div>
        <div
          className="dot"
          style={{ left: `${x}px`, top: `${y}px` }}
        ></div>
      </div>
    </Container>
  );
}