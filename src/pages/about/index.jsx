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
          <p>I am Christiaan Quyn, a self-taught software developer and open source advocate who enjoys building visually pleasing web applications with a keen focus on seamless UI/UX based in Colombo, Sri Lanka.</p>

          <p>I started coding while working as a support engineer for industrial HVAC equipment. I developed an interest in programming totally by accident during my tenure as a service engineer.</p>

          <p>I am currently a web developer at <OutboundLink to="https://surge.global/">Surge Global</OutboundLink>. Additionally, I have an avid interest in history and economics and write about design, software development and business. Check out my <OutboundLink to="https://medium.com/@christianq010">blog</OutboundLink> if you would like to learn more.</p>

        </section>
        <aside className={styles.skills}>
          <div>
            <h3>Skills</h3>
            <h4>Presentation</h4>
            <p>Css Grids, Flexbox, Css, Html, Less, Scss</p>
            <h4>Javascript</h4>
            <p>React, Vue, Webpack, Gulp, Bower, React Native, jQuery, Knockout</p>
            <h4>Python</h4>
            <p>Flask, Django, pip, SQLAlchemy, venv</p>
            <h4>Server</h4>
            <p>Node, PostgreSQL, MySQL, Mongo</p>
            <h4>Other</h4>
            <p>Ubuntu Config, Vagrant, Git, SSH</p>
          </div>

        </aside>
      </div>

      <section>
        <h2>{"Things I'm passionate about"}</h2>
        <div className={styles.referrals}>
          <div className={styles.referral}>
            <img src={lighthouseSrc} alt="Profile" />
            <div>
              <h4>Web Development</h4>
              <p>Programming is empowering. I am always excited by new libraries and frameworks and constantly look to grow as an engineer. As an open source advocate I set up all my projects on <OutboundLink to="https://github.com/Christianq010">Github</OutboundLink>.</p>
            </div>
          </div>

          <div className={styles.referral}>
            <img src={inlightSrc} alt="Shokstix logo" />
            <div>
              <h4>Electronic Music Production</h4>
              <p>Prior to developing web apps full time I produced electronic music, supported by the likes of Darude, Above & Beyond, W&W, Gareth Emery and many more. Check out my <OutboundLink to="https://soundcloud.com/christianq-music">Soundcloud</OutboundLink> for more.</p>
            </div>
          </div>

          <div className={styles.referral}>
            <img src={ahmSrc} alt="Crystal Cave thumbnail" />
            <div>
              <h4>Concept Art</h4>
              <p>{"When I'm not hard at work, I constantly go through concept art for inspiration. I use a combination of Procreate and Sketch to draw a combination of my own art and mockups and upload it to my "} <OutboundLink to="https://www.artstation.com/christianq010">Artstation</OutboundLink> account.</p>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  </ContentPage>
);

export default About;
