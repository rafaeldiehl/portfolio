import { useState, useEffect } from 'react';

import GlobalStyle from '../styles/global';

import { useWindowDimensions } from '../hooks/useWindowDimensions';

import { Cursor } from '../components/Cursor';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { ProjectPage } from '../components/ProjectPage';

import { Container } from '../styles/pages/home';

import nautilusCalculus from '../assets/images/nautiluscalculus.png';

interface HomeProps {
  data: {
    title: string;
    description: string;
    img: string;
    techs: Array<string>;
    link: string;
  },
  handleTheme: () => void;
}

export function Project({ data, handleTheme }: HomeProps) {
  const { width } = useWindowDimensions();
  const [cursor, setCursor] = useState<Boolean>(false);

  useEffect(() => {
    width > 600 ? setCursor(true) : setCursor(false)
  }, [width]);

  return (
    <Container id={data.title} className={cursor && 'cursorOn'}>
      <div className="block-bg" />
      <GlobalStyle />
      {cursor && <Cursor />}
      <Navbar handleTheme={handleTheme} />
      <ProjectPage
        title={data.title}
        description={data.description}
        img={data.img}
        techs={data.techs}
        link={data.link}
      />
      <Footer />
    </Container>
  );
}