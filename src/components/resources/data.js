import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faGithub,
  faSquareGithub,
  faLinkedin,
  faBitbucket,
} from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';

export const links = [
  {
    id: 1,
    url: 'home',
    text: 'Home',
  },
  {
    id: 2,
    url: 'about',
    text: 'About',
  },
  {
    id: 3,
    url: 'services',
    text: 'Services',
  },
  {
    id: 4,
    url: 'projects',
    text: 'Projects',
  },
  {
    id: 5,
    url: 'contacts',
    text: 'Contacts',
  },
];

export const social = [
  {
    id: 1,
    url: 'https://github.com/Bernice-Nkirote',
    icon: <FontAwesomeIcon icon={faSquareGithub} />,
  },
  {
    id: 2,
    url: 'https://www.linkedin.com/in/bernice-mwirigi-04504498/',
    icon: <FontAwesomeIcon icon={faLinkedin} />,
  },
  {
    id: 3,
    url: 'https://bitbucket.org/bernice-workspace/workspace/repositories/',
    icon: <FontAwesomeIcon icon={faBitbucket} />,
  },
];
export const projects = [
  {
    id: 1,
    name: ' Cocktail Bar',
    img: '/portfolio-images/cocktails.png',
    url: 'https://github.com/Bernice-Nkirote/cocktail-app.git',
    icon: <FontAwesomeIcon icon={faGithub} />,
    viewPage: 'https://cocktailber.netlify.app/',
    view: <FontAwesomeIcon icon={faEye} />,
  },
  {
    id: 2,
    name: ' Tic-tac-toe',
    img: '/portfolio-images/tictactoe.png',
    url: 'https://github.com/Bernice-Nkirote/Tic-Tac-Toe.git',
    icon: <FontAwesomeIcon icon={faGithub} />,
    viewPage: 'https://nkiro-tictactoe.netlify.app/',
    view: <FontAwesomeIcon icon={faEye} />,
  },
  {
    id: 3,
    name: ' Bernold Autoparts',
    img: 'portfolio-images/cars_5000.jpg',
    url: 'https://github.com/Bernice-Nkirote/BERNOLD-AUTOPARTS.git',
    icon: <FontAwesomeIcon icon={faGithub} />,
    viewPage: 'https://bernold-autoparts.netlify.app/',
    view: <FontAwesomeIcon icon={faEye} />,
  },
];
