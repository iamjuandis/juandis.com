module.exports = {
  images: {
    domains: ['res.cloudinary.com', 'cloudinary.com', 'juandis.com'],
  },
  async redirects() {
    return [
      {
        source: '/resume',
        destination:
          'https://drive.google.com/file/d/1-5jTi991bUSBmLdkpPchRM54k2EwBZlR/view?usp=sharing',
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
