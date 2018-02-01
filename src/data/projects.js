const projects = [
  {
    className: 'click',
    description: 'A Bank Of America inspired mobile banking app designed in Sketch, turned into a webpage optimized for a mobile experience.',
    links: {
      website: 'https://github.com/Christianq010/finance_frontend-mobile1',
    },
    slug: 'finance-app',
    title: 'Finance App',
    cover: require('./logo.svg'),
    theme: {
      background: '#165e95',
    },
  },
  {
    className: 'kindyNow',
    description: 'A Web application that provides a list of items within a variety of categories as well as provide a user registration and authentication system. Registered users will have the ability to post, edit and delete their own items.',
    links: {
      website: 'https://fsnd-item-catalog-app.herokuapp.com/',
    },
    slug: 'item-catalog',
    title: 'Item Catalog',
    cover: require('./flask.png'),
    theme: {
      background: '#F7F7F7',
      light: true,
    },
  },
  {
    className: 'chadstone',
    description: 'This Web App is an interactive Google Map of Sri Lanka with various National Wildlife Parks marked all around the map.',
    clientDescription: 'A single page application featuring a neighborhood map, with added functionality including highlighted locations, third-party data about those locations and various ways to browse the content.',
    links: {
      website: 'https://christianq010.github.io/Neighborhood-Map-Master/',
    },
    slug: 'neighborhood-map',
    title: 'Neighborhood Map',
    cover: require('./maps-icon.svg'),
    theme: {
      background: '#558B2F',
    },
  },
];

export default projects;
