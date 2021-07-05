import { Anchor } from './Anchor';

import { Container } from "../styles/components/contactLinks";

import { 
  FiMail,
  FiGithub,
  FiLinkedin
} from 'react-icons/fi';

export function ContactLinks() {
  return (
    <Container>
      <ul>
        <li>
          <Anchor href="" target="_blank">
            <FiMail />
          </Anchor>
        </li>
        <li>
          <Anchor href="" target="_blank">
            <FiGithub />
          </Anchor>
        </li>
        <li>
          <Anchor href="" target="_blank">
            <FiLinkedin />
          </Anchor>
        </li>
      </ul>
    </Container>
  );
};