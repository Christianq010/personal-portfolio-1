import React from 'react';
import Meta from '../../components/meta';
import Contact from '../../components/contact';
import { ProjectPanel } from '../../components/project';
import Wrapper from '../../components/wrapper';

import projects from '../../data/projects';

import styles from './styles.module.css';

const Work = ({ location }) => (
  <div>
    <Meta title="Work" description="Web applications, static websites and mobile apps built built by Christiaan Quyn." location={location} />

    {projects.map(project => <ProjectPanel project={project} key={project.slug} />)}

    <div className={styles.contact}>
      <Wrapper>
        <Contact title="" />
      </Wrapper>
    </div>
  </div>
);

export default Work;
