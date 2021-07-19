import { useState } from 'react';

import { Container } from '../styles/components/skills';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import { skills } from '../utils/skillList';

export function Skills() {
  const [index, setIndex] = useState(0);

  function increaseIndex() {
    index < skills.length - 1 ? setIndex(index + 1) : setIndex(0);
  }

  function decreaseIndex() {
    index > 0 ? setIndex(index - 1) : setIndex(skills.length - 1);
  }

  return (
    <Container id="skills">
      <div className="flex-container">
          <section className="descriptive">
            <span>Skills</span>
            <h2>Minhas habilidades.</h2>
            <p>A seguir está uma lista com as linguagens, ferramentas e outras tecnologias com que mais tive contato.
            </p>
            <p>
              A ordem da lista não está de acordo com o nível de proficiência nas linguagens.
            </p>
          </section>
          <section className="skill-list">
            <button 
              className="arrow left-arrow"
              onClick={decreaseIndex}
            >
              <FaArrowLeft />
            </button>
            <div className="carousel">
              <div className="far-left">
                <span style={{
                  color: skills[index].color
                }}>
                {skills[index].component}
                </span>
                <h3>{skills[index].title}</h3>
              </div>
              <div className="left">
                <span style={{
                  color: skills[skills[index + 1] ? index + 1 : index - skills.length + 1].color
                }}>
                  {skills[skills[index + 1] ? index + 1 : index - skills.length + 1].component}
                </span>
                <h3>{skills[skills[index + 1] ? index + 1 : index - skills.length + 1].title}</h3>
              </div>
              <div className="center">
                <span style={{
                  color: skills[skills[index + 2] ? index + 2 : index - skills.length + 2].color
                }}>
                  {skills[skills[index + 2] ? index + 2 : index - skills.length + 2].component}
                </span>
                <h3>{skills[skills[index + 2] ? index + 2 : index - skills.length + 2].title}</h3>
              </div>
              <div className="right">
                <span style={{
                  color: skills[skills[index + 3] ? index + 3 : index - skills.length + 3].color
                }}>
                  {skills[skills[index + 3] ? index + 3 : index - skills.length + 3].component}
                </span>
                <h3>{skills[skills[index + 3] ? index + 3 : index - skills.length + 3].title}</h3>
              </div>
              <div className="far-right">
                <span style={{
                  color: skills[skills[index + 4] ? index + 4 : index - skills.length + 4].color
                }}>
                  {skills[skills[index + 4] ? index + 4 : index - skills.length + 4].component}
                </span>
                <h3>{skills[skills[index + 4] ? index + 4 : index - skills.length + 4].title}</h3>
              </div>
            </div>
            <button
              className="arrow right-arrow"
              onClick={increaseIndex}  
            >
              <FaArrowRight />
            </button>
          </section>
        </div>
    </Container>
  );
}