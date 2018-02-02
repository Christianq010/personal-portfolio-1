import React from 'react';
import Link from 'gatsby-link';

import ContentPage from '../../components/content-page';
import Meta from '../../components/meta';

import Wrapper from '../../components/wrapper';

import styles from './styles.module.css';


export default function Template({ location, data }) {
  const { markdownRemark: post } = data;

  return (
    <ContentPage>
      <Meta title="Blog | Post" location={location} />
      <Wrapper>
        <h6 className={styles.backLink}><Link to="/blog">Back</Link></h6>
        <div className={styles.post}>
          <h1> { post.frontmatter.title } </h1>
          <br />
          <h4>Published { post.frontmatter.date } </h4>
          <h5 className={styles.categoryPost}> / { post.frontmatter.category } </h5>
          <br />
          <div className={styles.postContent} dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </Wrapper>
    </ContentPage>
  );
}

export const postQuery = graphql `
    query BlogPostByPaths ($path: String!) {
        markdownRemark (frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              path
              title
              category
            }
        }
    }
`;
