const manifest = () => {
  return {
    name: 'Abhishek Kolge',
    short_name: 'Abhishek Kolge',
    description:
      'Abhishek Kolge specializes in end-to-end development and crafting robust solutions for both web and mobile applications.',
    start_url: '/',
    display: 'standalone',
    background_color: '#111e41',
    theme_color: '#111e41',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
};

export default manifest;
