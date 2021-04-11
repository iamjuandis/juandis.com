module.exports = {
  images: {
    domains: ['res.cloudinary.com', 'cloudinary.com', 'juandis.com'],
  },
  async redirects() {
    return [
      {
        source: '/resume',
        destination:
          'https://drive.google.com/file/d/1k0G0OawfFeTelQGkjQ02xE9f0Fh50z2P/view?usp=sharing',
        permanent: true,
      },
      {
        source: '/in',
        destination: 'https://bit.ly/linkedinjuandis',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://bit.ly/githubjuandis',
        permanent: true,
      },
    ];
  },
};
