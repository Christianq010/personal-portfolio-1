import React from 'react';

import Icon from '../icon';
import OutboundLink from '../outbound-link';

import styles from './styles.module.css';

const Social = () => (
  <div className={styles.contact}>
    <div className={styles.lineBreak} />
    <ul className={styles.social}>
      <li>
        <OutboundLink to="https://github.com/Christianq010/">
          <Icon name="github" />
        </OutboundLink>
      </li>
      <li>
        <OutboundLink to="https://www.linkedin.com/in/christianq010/">
          <Icon name="linkedin" />
        </OutboundLink>
      </li>
      <li>
        <OutboundLink to="https://twitter.com/christianq010/">
          <Icon name="twitter" />
        </OutboundLink>
      </li>
      <li>
        <OutboundLink to="https://www.instagram.com/christiaanquyn/">
          <Icon name="instagram" />
        </OutboundLink>
      </li>
    </ul>
  </div>
);

export default Social;
