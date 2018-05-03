import React from 'react';
import Link from 'gatsby-link';

import ContentPage from '../../components/content-page';
import Social from '../../components/social-icons';

import Meta from '../../components/meta';
import OutboundLink from '../../components/outbound-link';
import Wrapper from '../../components/wrapper';


import styles from './styles.module.css';

const Blog = ({ location, data }) => (
  <ContentPage>
    <Meta title="Blog" location={location} />
    <Wrapper>
      <div className={styles.blog}>
        <h1>Blog</h1>
        <section>
          <div className={styles.blogPostFooter}>
            <h4>Check out my Medium stories <OutboundLink to="https://medium.com/@christianq010">here</OutboundLink>.</h4>
          </div>
        </section>
      </div>

      <Social />

    </Wrapper>
  </ContentPage>
);

export const pageQuery = graphql `
  query IndexQuery {
    allMarkdownRemark ( 
      limit: 10
      sort: { fields: [frontmatter___date], order: ASC }
      filter: { frontmatter: { published: {eq: true} } }
    )
    {
      edges {
        node {
          id
          excerpt(pruneLength: 200)
          frontmatter {
            title
            path
            date (formatString: "MMMM DD, YYYY")
            category
          }
        }
      }
    }
  }
`;

export default Blog;
