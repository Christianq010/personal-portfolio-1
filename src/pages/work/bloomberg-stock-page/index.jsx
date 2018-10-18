import React from 'react';
import projects from '../../../data/projects';

import Carousel from '../../../components/carousel';
import Macbook from '../../../components/macbook';
import Wrapper from '../../../components/wrapper';
import { ProjectIntro, ProjectPage } from '../../../components/project';

import styles from './styles.module.css';


const images = {
  desktop: [
    { src: require('./img/homepage.jpg'), description: 'Bloomberg Markets stocks homepage' },
  ],
};

const ItemCatalog = ({ location }) => {
  const project = projects.find(p => p.slug === 'bloomberg-stock-page');

  const image = (
    <div className={styles.image}>
      <img src={project.cover} alt="Cover" />
    </div>
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

export default ItemCatalog;
