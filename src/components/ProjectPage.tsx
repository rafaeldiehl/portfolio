import { Container } from '../styles/components/projectPage';

import { SiGithub } from 'react-icons/si';

import { Anchor } from './Anchor';

type ProjectPageProps = {
  title: string;
  description: string;
  img: string;
  techs: Array<string>;
  link: string;
}

export function ProjectPage(props: ProjectPageProps) {
  return (
    <Container>
      <div className="descriptive">
        <span>Projeto</span>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <p>
          Tecnologias utilizadas:
        </p>
        <ul>
          {props.techs.map(tech => {
            return (
              <li>{tech}</li>
            )
          })}
        </ul>
        <Anchor href={props.link} target="_blank">
          <button>
            <SiGithub />
            <span>Acesse o repositório</span>
          </button>
        </Anchor>
      </div>
      <div className="image-container"  style={{
      backgroundImage: `url(${props.img})`
      }}>
        <span></span>
      </div>
    </Container>
  )
}