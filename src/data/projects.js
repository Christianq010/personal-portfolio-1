const projects = [
  {
    className: 'click',
    description: 'A Bank Of America inspired mobile banking app designed in Sketch, turned into a webpage optimized for a mobile experience.',
    links: {
      website: 'https://github.com/Christianq010/finance_frontend-mobile1',
    },
    slug: 'finance-app',
    title: 'Finance App',
    cover: require('./sass.png'),
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
  {
    className: 'lifeWithBird',
    description: 'A minimal and clean e-commerce website built for the contemporary clothing brand based in Melbourne.',
    clientDescription: 'Life with Bird was established in 2002 with a desire to create high quality, beautifully crafted contemporary clothing. The company continues to expand its global following.',
    links: {
      website: 'https://lifewithbird.com',
    },
    slug: 'life-with-bird',
    title: 'Life with Bird',
    cover: require('./life-with-bird.jpg'),
    theme: {
      background: '#f4f5fa',
      light: true, // Invert text color.
    },
  },
  {
    className: 'ahm',
    description: 'A complete overhaul of the Australian health insurer\'s website to provide an enhanced user experience.',
    clientDescription: 'Ahm (Australian Health Management) is a subsidiary of one of Australia’s largest health insurers. The company now handles health cover for over 370,000 people.',
    links: {
      website: 'https://ahm.com.au',
    },
    slug: 'ahm',
    title: 'Ahm',
    cover: require('./ahm.png'),
    theme: {
      background: '#000',
    },
  },
  {
    className: 'mrRed',
    description: 'An iOS game built using the Unity 3D game engine. A personal project to challenge and inspire oneself.',
    links: {
      ios: 'https://itunes.apple.com/app/id1165442603',
    },
    slug: 'mr-red',
    title: 'Mr. Red',
    cover: require('./mr-red.png'),
    theme: {
      background: '#5ab6ff',
    },
  },
];

export default projects;
