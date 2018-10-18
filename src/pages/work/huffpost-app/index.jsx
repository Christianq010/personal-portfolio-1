import React from 'react';
import projects from '../../../data/projects';

import Carousel from '../../../components/carousel';
import Iphone from '../../../components/iphone';
import Macbook from '../../../components/macbook';
import OutboundLink from '../../../components/outbound-link';
import Wrapper from '../../../components/wrapper';
import { ProjectDescription, ProjectIntro, ProjectPage } from '../../../components/project';

import styles from './styles.module.css';

const images = {
  desktop: [
    { src: require('./img/desktop/homepage.jpg'), description: 'Homepage' },
    { src: require('./img/desktop/article.jpg'), description: 'Article' },
  ],
  mobile: [
    { src: require('./img/mobile/homepage.jpg'), description: 'Huffpost home page on mobile' },
    { src: require('./img/mobile/article.jpg'), description: 'Huffpost article page on mobile' },
  ],
};

const Click = ({ location }) => {
  const project = projects.find(p => p.slug === 'huffpost-app');

  const image = (
    <div className={styles.image}>
      <img src={project.cover} alt="Cover" />
    </div>
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
        <p>A Vue.js project, built with the Vue CLI. The design, initally a pdf was turned into front-end app using a combination of various technologies for the web including CSS Grids and Flexbox.</p>
        <p>Tools used to aid the front-end work were <OutboundLink to="https://github.com/prettier/prettier-vscode">Prettier</OutboundLink>, Chrome dev Tools and ESLint</p>
      </ProjectDescription>
      <Wrapper>
        <Macbook>
          <Carousel images={images.desktop} />
        </Macbook>
      </Wrapper>
    </ProjectPage>
  );
};

export default Click;
