import { Container } from '../styles/components/about';

export function About() {
  return (
    <Container id="about">
      <div className="flex-container">
        <section className="descriptive">
          <span>Sobre</span>
          <h2>Um pouco sobre mim.</h2>
          <p>Me chamo Rafael, tenho 18 anos, nasci e vivo em Cerquilho — interior de São Paulo — e meu primeiro contato com o desenvolvimento de software
            foi no ensino médio. Apesar de ter gostado de programação no geral, meu entusiasmo de fato
            surgiu com o desenvolvimento web. Desde então, tenho me dedicado aos estudos de forma autodidata.
          </p>
        </section>
        <section className="trajectory">
          <h3>Trajetória acadêmica</h3>
          <div className="node">
            <span className="circle first-circle"></span>
            <div className="course">
              <span className="time">2018 a 2020</span>
              <h3>Técnico em Redes de Computadores</h3>
              <p>IFSP Campus Boituva</p>
            </div>
          </div>
          <div className="node">
            <span className="circle"></span>
            <div className="course">
              <span className="time">2020 a 2020</span>
              <h3>FIC em Programador Web</h3>
              <p>IFSuldeMinas EAD</p>
            </div>
          </div>
          <div className="node">
            <span className="circle active-circle"></span>
            <div className="course">
              <span className="time">2021 até o presente</span>
              <h3>Tecnólogo em ADS</h3>
              <p>IFSP Campus Boituva</p>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
}