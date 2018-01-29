module.exports = {
  siteMetadata: {
    title: 'Christiaan Quyn',
    url: 'https://chrisquyn.com',
    description: 'Christiaan Quyn is a passionate Front-End developer, music producer and concept artist.',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-113183371-1',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages/blog/posts`,
        name: 'posts',
      },
    },
    'gatsby-transformer-remark',
  ],
};
