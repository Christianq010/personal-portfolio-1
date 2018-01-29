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
    { src: require('./img/main.png'), description: 'Map main page' },
    { src: require('./img/sidebar.png'), description: 'map sidebar' },
    { src: require('./img/selected-location.png'), description: 'map selected location' },
  ],
  mobile: [
    { src: require('./img/mobile-main.png'), description: 'Main page mobile' },
    { src: require('./img/mobile-sidebar.png'), description: 'Sidebar on mobile' },
    { src: require('./img/mobile-selected.png'), description: 'Selected location mobile' },
  ],
};

const NeighborhoodMap = ({ location }) => {
  const project = projects.find(p => p.slug === 'neighborhood-map');

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
        <p>An interactive Google Map of Sri Lanka with various National Wildlife Parks marked all around the map. Click on one of the location markers to display the title of the park and a snippet of that location via Wikipedia.</p>
        <p>Github repo <OutboundLink to="https://github.com/Christianq010/Neighborhood-Map-Master">here</OutboundLink></p>
      </ProjectDescription>
      <Wrapper>
        <Macbook>
          <Carousel images={images.desktop} />
        </Macbook>
      </Wrapper>
    </ProjectPage>
  );
};

export default NeighborhoodMap;
