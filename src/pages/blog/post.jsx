import React from 'react';


export default function Template({ data }) {
  const { markdownRemark: post } = data;

  return (
    <div>
      <h1> { post.frontmatter.title } </h1>
      <h4> { post.frontmatter.date } </h4>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
}

export const postQuery = graphql `
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html, 
            frontmatter {
                path
                title
                date (formatString: "MMMM DD, YYYY")
            }
        }
    }
`;
