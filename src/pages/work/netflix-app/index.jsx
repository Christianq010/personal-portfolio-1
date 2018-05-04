import React from 'react';
import projects from '../../../data/projects.js';

import Carousel from '../../../components/carousel';
import Iphone from '../../../components/iphone';
import Macbook from '../../../components/macbook';
import OutboundLink from '../../../components/outbound-link';
import Wrapper from '../../../components/wrapper';
import { ProjectDescription, ProjectIntro, ProjectPage } from '../../../components/project';

const images = {
  desktop: [
    { src: require('./img/main.jpg'), description: 'Netflix desktop landing page' },
  ],
  mobile: [
    { src: require('./img/mobile-main.jpg'), description: 'Netflix home page on mobile' },
  ],
};

const NetflixApp = ({ location }) => {
  const project = projects.find(p => p.slug === 'netflix-app');

  const image = (
    <img src={project.cover} alt="Cover" />
  );

  const iphone = (
    <Iphone>
      <Carousel images={images.mobile} />
    </Iphone>
  );

  return (
    <ProjectPage project={project} location={location}>
      <ProjectIntro project={project} media={image} />
      <ProjectDescription media={iphone}>
        <h3>Project</h3>
        <p>This project is a clone of the Netflix landing page (10/02/2018) built with React 16 Components. This project was bootstrapped with Create React App. Tools used to aid the Front-end work were Styled Components, React Developer Tools and Webpack.</p>
        <p>Github repo <OutboundLink to="https://github.com/Christianq010/netflix_landing-page">here</OutboundLink></p>
      </ProjectDescription>
      <Wrapper>
        <Macbook>
          <Carousel images={images.desktop} />
        </Macbook>
      </Wrapper>
    </ProjectPage>
  );
};

export default NetflixApp;
