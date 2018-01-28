import React from 'react';
import Link from 'gatsby-link';

import ContentPage from '../../components/content-page';
import Meta from '../../components/meta';
import OutboundLink from '../../components/outbound-link';
import Wrapper from '../../components/wrapper';

import ahmSrc from './img/ahm.png';
import inlightSrc from './img/inlight.png';
import lighthouseSrc from './img/lighthouse.png';


import styles from './styles.module.css';

const About = ({ location }) => (
  <ContentPage>
    <Meta title="About" location={location} />
    <Wrapper>
      <div className={styles.about}>
        <section className={styles.intro}>
          <h1>Hi everyone.</h1>
          <p>I am Christiaan Quyn, a self-taught Software Developer and Open Source Advocate who enjoys building visually pleasing web applications with a keen focus on seamless UI/UX.</p>

          <p>I started coding while working as a Trainee Engineer for Industrial HVAC Equipment. I developed an interest in programming totally by accident during my tenure as a service technician for Industrial Chillers in Sri Lanka.</p>

          <p>I am currently a web developer at <OutboundLink to="https://surge.global/">Surge Global</OutboundLink>. It is an incredible adventure building great products, being a part of its culture and community, all while delivering value to our clients - with a team I admire.</p>

          <p>Prior to developing web apps full time I produced electronic music, supported by the likes of Darude, Above & Beyond, W&W, Gareth Emery and many more.</p>

          <p>Check out my <Link to="/contact">blog</Link> if you would like to learn more.</p>

        </section>
        <aside className={styles.skills}>
          <div>
            <h3>Skills</h3>
            <h4>Presentation</h4>
            <p>Bootstrap, Css, Html, Less, Sass</p>
            <h4>Javascript</h4>
            <p>Ember, Gulp, Bower, jQuery, Nunjucks, React, Webpack</p>
            <h4>Python</h4>
            <p>Flask, Django, pip, SQLAlchemy, venv </p>
            <h4>Server</h4>
            <p>Node, PostgreSQL, MySQL, Mongo </p>
            <h4>Other</h4>
            <p>Ubuntu Config, Vagrant, Git, SSH </p>
          </div>

        </aside>
      </div>

      <section>
        <h2>What people say</h2>
        <div className={styles.referrals}>
          <div className={styles.referral}>
            <img src={lighthouseSrc} alt="Lighthouse logo" />
            <div>
              <h4>Patrick Carne, Lighthouse</h4>
              <p>“Over the last 3 years Oliver has grown into a solid front-end developer, with an ability and eagerness to pick up new technologies quickly. I have no doubt Oliver will go on to be an exceptional developer in any area he chooses to focus.”</p>
            </div>
          </div>

          <div className={styles.referral}>
            <img src={inlightSrc} alt="Inlight logo" />
            <div>
              <h4>Sina Karimi, Inlight</h4>
              <p>“Oliver is an exceptional front end developer. He has grown rapidly over the past few years to be a valuable member of any development team. It has been a real pleasure to work with him over the years.”</p>
            </div>
          </div>

          <div className={styles.referral}>
            <img src={ahmSrc} alt="Ahm logo" />
            <div>
              <h4>James Hanley, Ahm</h4>
              <p>“I worked with Oliver on a number of projects for the Ahm websites. When a new brief would come in he was consultative and logical in his approach to help us define a solution to our business problem. His collaborative approach and comfort with clients/business makes him a great addition to a digital development team.”</p>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  </ContentPage>
);

export default About;
