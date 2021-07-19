import { BiLink } from 'react-icons/bi';

import { Link } from 'react-router-dom';

import { Container } from '../styles/components/projects';

import nautilusLogo from "../assets/images/nautiluscalculus_logo.png";
import happyLogo from "../assets/images/happy_logo.png";
import proffyLogo from "../assets/images/proffy_logo.png";
import easybankLogo from "../assets/images/easybank_logo.png";
import moveitLogo from "../assets/images/moveit_logo.png";
import podcastrLogo from "../assets/images/podcastr_logo.png";

export function Projects() {
  return (
    <Container id="projects">
      <div className="flex-container">
        <div className="descriptive">
        <span>Projetos</span>
          <h2>Conheça meus projetos.</h2>
          <p>Nesta seção, você pode conhecer alguns de meus projetos. Há uns consideravelmente mais atualizados que outros.
            Eles foram desenvolvidos durante treinamentos, atividades acadêmicas e eventos de programação.
          </p>
        </div>
        <div className="projects-container">
          <Link to="/test" className="project-1">
            <img src={nautilusLogo} alt="Nautilus Calculus" />
            <BiLink />
          </Link>
          <Link to="/test" className="project-2">
            <img src={happyLogo} alt="Happy" />
            <BiLink />
          </Link>
          <Link to="/test" className="project-3">
            <img src={proffyLogo} alt="Proffy" />
            <BiLink />
          </Link>
          <Link to="/test" className="project-4">
            <img src={easybankLogo} alt="Easybank" />
            <BiLink />
          </Link>
          <Link to="/test" className="project-5">
            <img src={podcastrLogo} alt="Podcastr" />
            <BiLink />
          </Link>
          <Link to="/test" className="project-6">
            <img src={moveitLogo} alt="Move.it" />
            <BiLink />
          </Link>
        </div>
      </div>
    </Container>
  );
}