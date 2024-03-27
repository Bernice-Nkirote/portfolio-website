import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLaptopCode,
  faGears,
  faDatabase,
  faToolbox,
} from '@fortawesome/free-solid-svg-icons';
import { deviconsData } from './devicon';

export const skillset = [
  {
    id: 1,
    label: '01/',
    service: 'Front-End',
    icon: <FontAwesomeIcon icon={faLaptopCode} />,
    text: 'These tools will conjure up delightful user experiences.',
    devicons: [
      {
        name: 'HTML5',
        imgUrl: deviconsData.frontEnd.find(
          (devicon) => devicon.name === 'HTML5'
        ).imgUrl,
      },
      {
        name: 'CSS3',
        imgUrl: deviconsData.frontEnd.find((devicon) => devicon.name === 'CSS3')
          .imgUrl,
      },
      {
        name: 'JavaScript',
        imgUrl: deviconsData.frontEnd.find(
          (devicon) => devicon.name === 'JavaScript'
        ).imgUrl,
      },
      {
        name: 'React',
        imgUrl: deviconsData.frontEnd.find(
          (devicon) => devicon.name === 'React'
        ).imgUrl,
      },
      {
        name: 'Bootstrap',
        imgUrl: deviconsData.frontEnd.find(
          (devicon) => devicon.name === 'Bootstrap'
        ).imgUrl,
      },
    ],
  },
  {
    id: 2,
    label: '02/',
    service: 'Back-End',
    icon: <FontAwesomeIcon icon={faGears} />,
    text: 'The architect behind your application is run by these guys!',
    devicons: [
      {
        name: 'Node.js',
        imgUrl: deviconsData.backEnd.find(
          (devicon) => devicon.name === 'Node.js'
        ).imgUrl,
      },
      {
        name: 'Express',
        imgUrl: deviconsData.backEnd.find(
          (devicon) => devicon.name === 'Express'
        ).imgUrl,
      },
      {
        name: 'Python',
        imgUrl: deviconsData.backEnd.find(
          (devicon) => devicon.name === 'Python'
        ).imgUrl,
      },
      {
        name: 'PHP',
        imgUrl: deviconsData.backEnd.find((devicon) => devicon.name === 'PHP')
          .imgUrl,
      },
      {
        name: 'GO',
        imgUrl: deviconsData.backEnd.find((devicon) => devicon.name === 'GO')
          .imgUrl,
      },
    ],
  },
  {
    id: 3,
    label: '03/',
    service: 'Databases',
    icon: <FontAwesomeIcon icon={faDatabase} />,
    text: 'Think of this as a library.',
    devicons: [
      {
        name: 'MongoDB',
        imgUrl: deviconsData.database.find(
          (devicon) => devicon.name === 'MongoDB'
        ).imgUrl,
      },
      {
        name: 'MySQL',
        imgUrl: deviconsData.database.find(
          (devicon) => devicon.name === 'MySQL'
        ).imgUrl,
      },
    ],
  },
  {
    id: 4,
    label: '04/',
    service: 'Tools',
    icon: <FontAwesomeIcon icon={faToolbox} />,
    text: 'A helping hand.',
    devicons: [
      {
        name: 'Github',
        imgUrl: deviconsData.tools.find((devicon) => devicon.name === 'Github')
          .imgUrl,
      },
      {
        name: 'Canva',
        imgUrl: deviconsData.tools.find((devicon) => devicon.name === 'Canva')
          .imgUrl,
      },
      {
        name: 'Zoom',
        imgUrl: deviconsData.tools.find((devicon) => devicon.name === 'Zoom')
          .imgUrl,
      },
      {
        name: 'Skype',
        imgUrl: deviconsData.tools.find((devicon) => devicon.name === 'Skype')
          .imgUrl,
      },
      {
        name: 'PowerPoint',
        imgUrl: deviconsData.tools.find(
          (devicon) => devicon.name === 'PowerPoint'
        ).imgUrl,
      },
      {
        name: 'Microsoft Teams',
        imgUrl: deviconsData.tools.find(
          (devicon) => devicon.name === 'Microsoft Teams'
        ).imgUrl,
      },
      {
        name: 'ChatGpt',
        imgUrl: deviconsData.tools.find((devicon) => devicon.name === 'ChatGpt')
          .imgUrl,
      },
    ],
  },
];
