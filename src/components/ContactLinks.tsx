import { Anchor } from './Anchor';

import { Container } from "../styles/components/contactLinks";
import { contactLinks } from '../utils/contactLinks';

export function ContactLinks() {
  return (
    <Container>
      <ul>
        { contactLinks.map(contactLink => {
            return (
              <li key={contactLink.title}>
                <Anchor href={contactLink.link} target="_blank">
                  {contactLink.icon}
                </Anchor>
              </li>
            )
          }) }
      </ul>
    </Container>
  );
};