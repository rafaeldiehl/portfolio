import { 
  SiHtml5,
  SiCss3,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodeDotJs,
  SiPhp,
} from 'react-icons/si';

import { GrMysql } from 'react-icons/gr';

import { FaGitAlt } from 'react-icons/fa';

import { IoLogoSass } from 'react-icons/io';

export const skills = [
  {
    title: 'HTML5',
    component: <SiHtml5 />,
    color: '#D84924'
  },
  {
    title: 'CSS3',
    component: <SiCss3 />,
    color: '#3C8ED0'
  },
  {
    title: 'JavaScript',
    component: <SiJavascript />,
    color: '#FFCA28'
  },
  {
    title: 'TypeScript',
    component: <SiTypescript />,
    color: '#0288D1'
  },
  {
    title: 'React',
    component: <SiReact />,
    color: '#00BBD3'
  },
  {
    title: 'Sass',
    component: <IoLogoSass />,
    color: '#C43867'
  },
  {
    title: 'Node.js',
    component: <SiNodeDotJs />,
    color: '#65893A'
  },
  {
    title: 'PHP',
    component: <SiPhp />,
    color: '#1C87E5'
  },
  {
    title: 'Git',
    component: <FaGitAlt />,
    color: '#D34833'
  },
  {
    title: 'MySQL',
    component: <GrMysql />,
    color: '#1C87E5'
  },
];