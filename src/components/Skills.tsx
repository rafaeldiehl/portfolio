import { Box } from './Box';

import { Container } from '../styles/components/skills';

import { skills } from '../utils/skillList';

export function Skills() {
  const boxs = skills.map((skill, index) => {
    return (
      <Box
        title={skill.title}
        color={skill.color}
        key={index}  
      >
        {skill.component}
      </Box>
    );
  });

  return (
    <Container id="skills">
      <div className="flex-container">
          <section className="descriptive">
            <span>SKILLS</span>
            <h2>Minhas habilidades.</h2>
            <p>A seguir, uma lista com as linguagens, ferramentas e outras tecnologias que eu já tive contato.
            </p>
          </section>
          <section className="skill-list">
            {boxs}
          </section>
        </div>
    </Container>
  );
}