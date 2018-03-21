# chrisquyn.com

Hosted  with [Surge](https://surge.sh) at - https://chrisquyn.com

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

# Deploying on /public on Github pages

#### Step 1
Remove the `dist` directory from the project’s `.gitignore` file (it’s ignored by default by Yeoman).

#### Step 2
Make sure git knows about your subtree (the subfolder with your site).

```
git add dist && git commit -m "Initial dist subtree commit"
```

#### Step 3
Use subtree push to send it to the gh-pages branch on GitHub.

```
git subtree push --prefix public origin gh-pages
```

Boom. If your folder isn’t called dist, then you’ll need to change that in each of the commands above.
