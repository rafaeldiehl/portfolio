import { Container } from '../styles/components/about';

export function About() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

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
        <section className="location">
          <h3>Trajetória acadêmica</h3>
          {/*
            Lista de nós
          */}
        </section>
      </div>
    </Container>
  );
}