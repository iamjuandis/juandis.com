module.exports = {
  images: {
    domains: ['res.cloudinary.com', 'cloudinary.com', 'juandis.com'],
  },
  async redirects() {
    return [
      {
        source: '/resume',
        destination:
          'https://drive.google.com/file/d/1BftXa9azSnw0dOJgQvvZ2Ukqh0W8Qdhp/view?usp=sharing',
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
    ];
  },
};
