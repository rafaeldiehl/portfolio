import { BiLink } from 'react-icons/bi';

import { Anchor } from '../components/Anchor';

import { Container } from '../styles/components/projects';

import nautilusLogo from "../assets/images/nautiluscalculus_logo.png";
import happyLogo from "../assets/images/happy_logo.png";
import proffyLogo from "../assets/images/proffy_logo.png";
import easybankLogo from "../assets/images/easybank_logo.png";
import moveitLogo from "../assets/images/moveit_logo.png";
import podcastrLogo from "../assets/images/podcastr_logo.png";

export function Projects() {
  return (
    <Container>
      <div className="flex-container">
        <div className="descriptive">
        <span>Projetos</span>
          <h2>Conheça meus projetos.</h2>
          <p>Nesta seção, você pode conhecer alguns de meus projetos. Há uns consideravelmente mais atualizados que outros.
            Eles foram desenvolvidos durante treinamentos, atividades acadêmicas e eventos de programação.
          </p>
        </div>
        <div className="projects-container">
          <Anchor className="project-1">
            <img src={nautilusLogo} alt="Nautilus Calculus" />
            <BiLink />
          </Anchor>
          <Anchor className="project-2">
            <img src={happyLogo} alt="Happy" />
            <BiLink />
          </Anchor>
          <Anchor className="project-3">
            <img src={proffyLogo} alt="Proffy" />
            <BiLink />
          </Anchor>
          <Anchor className="project-4">
            <img src={easybankLogo} alt="Easybank" />
            <BiLink />
          </Anchor>
          <Anchor className="project-5">
            <img src={podcastrLogo} alt="Podcastr" />
            <BiLink />
          </Anchor>
          <Anchor className="project-6">
            <img src={moveitLogo} alt="Move.it" />
            <BiLink />
          </Anchor>
        </div>
      </div>
    </Container>
  );
}