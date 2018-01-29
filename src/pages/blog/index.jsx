import React from 'react';
import Link from 'gatsby-link';

import ContentPage from '../../components/content-page';
import Meta from '../../components/meta';
import OutboundLink from '../../components/outbound-link';
import Wrapper from '../../components/wrapper';


import styles from './styles.module.css';

const Blog = ({ location, data }) => (
  <ContentPage>
    <Meta title="Blog" location={location} />
    <Wrapper>
      <div className={styles.blog}>
        <h1>All Stories</h1>
        <ul>
          { data.allMarkdownRemark.edges.map(post => (
            <li>
              <div className={styles.blogHeader}>
                <h3
                  key={post.node.id}
                >
                  {post.node.frontmatter.title}
                </h3>
                <p>{ post.node.frontmatter.date } / { post.node.frontmatter.category } </p>
                <p>{ post.node.excerpt }</p>
                <Link to={post.node.frontmatter.path} className={styles.readMore}>Read more</Link>
              </div>
              <hr className={styles.line} />
            </li>
          ))}
        </ul>

        <section>
          <div>
            <h4>Addionally you can check out my medium posts here <OutboundLink to="https://google.lk">Chris @ medium</OutboundLink></h4>
          </div>
        </section>
      </div>

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
