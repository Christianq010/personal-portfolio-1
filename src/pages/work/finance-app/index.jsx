import React from 'react';
import projects from '../../../data/projects';

import Carousel from '../../../components/carousel';
import Iphone from '../../../components/iphone';
import OutboundLink from '../../../components/outbound-link';
import { ProjectDescription, ProjectIntro, ProjectPage } from '../../../components/project';

import styles from './styles.module.css';

const images = [
  { src: require('./img/welcome-screen.png'), description: 'Finance app initial welcome screen' },
  { src: require('./img/welcome-screen1.png'), description: 'Finance app Apple pay info screen' },
  { src: require('./img/welcome-screen2.png'), description: 'Finance app Touch ID login info screen' },
  { src: require('./img/welcome-screen3.png'), description: 'Finance app Sitekey info screen' },
  { src: require('./img/sign-in.png'), description: 'Finance app sign in page' },
  { src: require('./img/touch-id-page.png'), description: 'Finance app sign in touch id page' },
  { src: require('./img/account-page.png'), description: 'Finance app Account page' },
  { src: require('./img/password-page.png'), description: 'Finance app sign in password page' },
  { src: require('./img/account-details-page.png'), description: 'Finance app Account transaction details page' },
];

const Click = ({ location }) => {
  const project = projects.find(p => p.slug === 'finance-app');

  const image = (
    <div className={styles.image}>
      <img src={project.cover} alt="Cover" />
    </div>
  );

  const iphone = (
    <Iphone>
      <Carousel images={images} />
    </Iphone>
  );

  return (
    <ProjectPage project={project} location={location}>
      <ProjectIntro project={project} media={image} />
      <ProjectDescription media={iphone}>
        <h3>Project</h3>
        <p>This project is a mockup Sketch project turned into a webpage optimized for a mobile experience. The Mockup was created on Sketch. Please view the deployed link on a mobile device for an optimal viewing experience.</p>
        <p>Tools used to aid the Front-end work were <OutboundLink to="https://zeplin.io/">Zeplin</OutboundLink>, Chrome Dev Tools for testing and NPM and Gulp for compiling SASS and running a dev server and managing bower dependencies.</p>
      </ProjectDescription>
    </ProjectPage>
  );
};

export default Click;
