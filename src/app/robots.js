export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/archive'],
    },
    sitemap: 'https://abhishekkolge.vercel.app/sitemap.xml',
  };
}
