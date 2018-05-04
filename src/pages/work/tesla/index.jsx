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
    { src: require('./img/main.png'), description: 'Tesla landing page' },
  ],
};

const Tesla = ({ location }) => {
  const project = projects.find(p => p.slug === 'tesla');

  const image = (
    <img src={project.cover} alt="Cover" />
  );

  return (
    <ProjectPage project={project} location={location}>
      <ProjectIntro project={project} media={image} />
      <Wrapper>
        <Macbook>
          <Carousel images={images.desktop} />
        </Macbook>
      </Wrapper>
    </ProjectPage>
  );
};

export default Tesla;
