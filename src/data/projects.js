const projects = [
  {
    className: 'click',
    description: 'A clone of the Huffingtonpost.com homepage front-end (09/2018) built with Vue JS. Layout for desktop and mobile implemented on Flexbox and CSS Grids.',
    links: {
      website: 'https://huff-post-live.surge.sh',
      repo: 'https://github.com/Christianq010/newspaper-front-end',
    },
    slug: 'huffpost-app',
    title: 'Huffingtonpost Vue app',
    cover: require('./HuffPostHero.svg'),
    theme: {
      background: '#000',
    },
  },
  {
    className: 'kindyNow',
    description: 'The Netflix.com landing page built via React 16 and Styled-Components. Build deployed via Surge.sh for preview.',
    links: {
      website: 'https://netflix-lp-clone.surge.sh/',
    },
    slug: 'netflix-app',
    title: 'Project Netflix',
    cover: require('./netflix-logo1.png'),
    theme: {
      background: '#F7F7F7',
      light: true,
    },
  },
  {
    className: 'chadstone',
    description: 'The 2018 Bloomberg Markets Stock Page built with Vue JS, Vue Router and Charts JS. This project was about analyzing and recreating the Bloomberg Markets stocks page.',
    links: {
      website: 'https://bloomberg-markets.surge.sh/',
      repo: 'https://github.com/Christianq010/vue_stock-trader',
    },
    slug: 'bloomberg-stock-page',
    title: 'Bloomberg Markets Stock Page',
    cover: require('./bmlogo.png'),
    theme: {
      background: '#FFEAD9',
      light: true,
    },
  },
  {
    className: 'mrRed',
    description: 'This project is a clone of the Tesla Motors landing page (04/2018) built with Vue JS. This project was bootstrapped with the vue-cli.',
    links: {
      website: 'https://tesla-motors-2018.surge.sh/',
      repo: 'https://github.com/Christianq010/tesla_landing-page-2018'
    },
    slug: 'tesla',
    title: 'Project Tesla',
    cover: require('./tesla.png'),
    theme: {
      background: '#000',
    },
  },
];

export default projects;
