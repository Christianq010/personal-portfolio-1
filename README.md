# chrisquyn.com

Hosted at - chrisquyn.surge.sh

![Codeship](https://codeship.com/projects/6f19e9e0-16a4-0134-caf4-1e201d51eca6/status?branch=master)

## Install
- `yarn install`

## Run
- In development: `npm run develop`.
- Static build: `npm run build`.

### Troubleshooting : 

Unable to build HTMl with the following query 
```
query BlogPostByPath($path: String!) {
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
```
