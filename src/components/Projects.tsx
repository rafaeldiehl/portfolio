import { Container } from '../styles/components/projects';

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
          {/*
          nautilus-calculus
          move.it
          podcastr
          happy
          easybank
          proffy
          */ }
        </div>
      </div>
    </Container>
  );
}