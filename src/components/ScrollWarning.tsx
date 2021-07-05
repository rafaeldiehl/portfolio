import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

import { Container } from '../styles/components/scrollWarning';

export function ScrollWarning() {
  return (
    <Container>
      <span>Scroll</span>
      <div className="arrow">
        <div className="arrow-trail" />
        <div className="arrow-caps" />
      </div>
    </Container>
  );
};