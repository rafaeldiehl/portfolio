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
          <Anchor href="mailto:rafaeljuliani1984@gmail.com" target="_blank">
            <FiMail />
          </Anchor>
        </li>
        <li>
          <Anchor href="https://github.com/rafaeldiehl" target="_blank">
            <FiGithub />
          </Anchor>
        </li>
        <li>
          <Anchor href="https://www.linkedin.com/in/rafael-juliani-diehl-94317a198/" target="_blank">
            <FiLinkedin />
          </Anchor>
        </li>
      </ul>
    </Container>
  );
};