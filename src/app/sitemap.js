const sitemap = () => {
  return [
    {
      url: 'https://abhishekkolge.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://abhishekkolge.vercel.app/archive',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
};

export default sitemap;
