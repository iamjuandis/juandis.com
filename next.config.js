if (!process.env.WORDPRESS_API_URL) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `);
}

module.exports = {
  images: {
    domains: [
      process.env.WORDPRESS_API_URL.match(/(?!(w+)\.)\w*(?:\w+\.)+\w+/)[0], // Valid WP Image domain.
      process.env.WORDPRESS_HOST,
      'res.cloudinary.com',
      'cloudinary.com',
      'juandis.com',
    ],
  },
  async redirects() {
    return [
      {
        source: '/resume',
        destination:
          'https://drive.google.com/file/d/1F7YKmRKmByYUAkyOJgRuzpcoR49aC0j_/view?usp=sharing',
        permanent: true,
      },
      {
        source: '/linkedin',
        destination: 'https://bit.ly/linkedinjuandis',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://bit.ly/githubjuandis',
        permanent: true,
      },
      {
        source: '/ui',
        destination:
          'https://www.figma.com/proto/io8Dd3ZIl39kaYQZYZ5nUU/UI-Showcase---Juan-David?page-id=1%3A2&type=design&node-id=1-3&viewport=92%2C446%2C0.05&t=8e2nTeEh4dyGGgrz-1&scaling=contain&starting-point-node-id=1%3A3&mode=design',
        permanent: true,
      },
    ];
  },
  env: {
    PASSWORD: process.env.PASSWORD,
    WORDPRESS_API_URL: process.env.WORDPRESS_API_URL,
    WORDPRESS_GRAPHQL_API_URL: process.env.WORDPRESS_GRAPHQL_API_URL,
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },
};
