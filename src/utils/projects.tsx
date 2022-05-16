import nautilusCalculusImg from '../assets/images/nautiluscalculus.png';
import happyImg from '../assets/images/happy.png';
import moveitImg from '../assets/images/moveit.png';
import podcastrImg from '../assets/images/podcastr.png';
import proffyImg from '../assets/images/proffy.png';
import easybankImg from '../assets/images/easybank.png';

export const projects = [
  {
    path: '/nautilus-calculus',
    title: 'Nautilus Calculus',
    description: "Projeto de website educacional que visa auxiliar discalcúlicos no ensino de Matemática, desenvolvido como TCC para o curso técnico em Redes de Computadores do IFSP Campus Boituva.",
    img: nautilusCalculusImg,
    techs: ["HTML", "JavaScript", "React", "Sass", "Node.js", "Express"],
    link: "https://github.com/rafaeldiehl/nautilus-calculus"
  },
  {
    path: '/happy',
    title: "Happy",
    description: "Plataforma que conecta pessoas e orfanatos, desenvolvida durante a NLW (Next Level Week) #3 da @Rocketseat.",
    img: happyImg,
    techs: ["HTML", "CSS", "TypeScript", "React", "Node.js", "Express", "SQLite"],
    link: "https://github.com/rafaeldiehl/happy"
  },
  {
    path: '/move-it',
    title: "Move.it",
    description: "Plataforma para gestão de tempo e realização de exercícios físicos, desenvolvida durante a NLW (Next Level Week) #4 da @Rocketseat.",
    img: moveitImg,
    techs: ["Next.js", "TypeScript", "React", "styled-components"],
    link: "https://github.com/rafaeldiehl/move.it"
  },
  {
    path: '/podcastr',
    title: "Podcastr",
    description: "Plataforma para ouvir podcasts, desenvolvida durante a NLW (Next Level Week) #5 da @Rocketseat. ",
    img: podcastrImg,
    techs: ["Next.js", "TypeScript", "React", "Sass"],
    link: "https://github.com/rafaeldiehl/podcastr",
  },
  {
    path: '/proffy',
    title: "Proffy",
    description: "Plataforma de estudos online, desenvolvida durante a NLW (Next Level Week) #2 da @Rocketseat.",
    img: proffyImg,
    techs: ["HTML", "CSS", "TypeScript", "React", "Node.js", "Express", "SQLite", "Knex"],
    link: "https://github.com/rafaeldiehl/proffy",
  },
  {
    path: '/easybank',
    title: "Easybank",
    description: "Landing page do banco Easybank, desenvolvida como solução de um desafio do Frontend Mentor. ",
    img: easybankImg,
    techs: ["HTML", "CSS", "JavaScript", "Sass"],
    link: "https://github.com/rafaeldiehl/easybank-landing-page-master",
  }
]