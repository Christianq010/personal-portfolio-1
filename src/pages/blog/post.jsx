import React from 'react';
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
        <div className={styles.post}>
          <h5 className={styles.categoryPost}> { post.frontmatter.category } </h5>
          <h1> { post.frontmatter.title } </h1>
          <br />
          <h4> { post.frontmatter.date } </h4>
          <br />
          <div className={styles.postContent} dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </Wrapper>
    </ContentPage>
  );
}

export const postQuery = graphql `
    query BlogPostByPath {
        markdownRemark {
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
