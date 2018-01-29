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
    { src: require('./img/main-screen.png'), description: 'Item Catalog centre detail' },
    { src: require('./img/sidebar-open-main.png'), description: 'Item Catalog sidebar open' },
    { src: require('./img/catalog-item1.png'), description: 'Item Catalog page' },
    { src: require('./img/edit-item.png'), description: 'Item Catalog edit item name' },
    { src: require('./img/login-page.png'), description: 'Item Catalog login' },
  ],
  mobile: [
    { src: require('./img/mobile-home.png'), description: 'Item Catalog home page on mobile' },
    { src: require('./img/mobile-sidemenu.png'), description: 'Item Catalog Sidemenu' },
    { src: require('./img/mobile-catalog-list.png'), description: 'item catalog list of items' },
    { src: require('./img/mobile-edit-name.png'), description: 'item catalog edit name' },
    { src: require('./img/mobile-login.png'), description: 'item catalog login' },
  ],
};

const ItemCatalog = ({ location }) => {
  const project = projects.find(p => p.slug === 'item-catalog');

  const image = (
    <div className={styles.image}>
      <img src={project.cover} alt="Cover" />
    </div>
  );

  const iphone = (
    <Iphone invert>
      <Carousel images={images.mobile} />
    </Iphone>
  );

  return (
    <ProjectPage project={project} location={location}>
      <ProjectIntro project={project} media={image} />
      <ProjectDescription media={iphone}>
        <h3>Project</h3>
        <p>In this project we develop a RESTful web application using the Python framework Flask along with implementing third-party OAuth authentication. Learn when to properly use the various HTTP methods available to you and how these methods relate to CRUD (create, read, update and delete) operations.</p>
        <p>This project was initially hosted on an Ubuntu instance via Amazon Lightsail, it is now hosted via Heroku, the instructions and github repo for the deployed version can be found <OutboundLink to="https://github.com/Christianq010/fsnd_Item-Catalog">here</OutboundLink>.</p>
      </ProjectDescription>
      <Wrapper>
        <Macbook>
          <Carousel images={images.desktop} />
        </Macbook>
      </Wrapper>
    </ProjectPage>
  );
};

export default ItemCatalog;
