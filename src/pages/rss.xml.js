import rss from '@astrojs/rss';

export const get = () => rss({
  title: 'Astro Learner | Blog',
  description: 'My journey learning Astro',
  site: 'https://master.d2nc565n52ru2n.amplifyapp.com/',
  items: import.meta.glob('./**/*.md'),
  customData: `<language>en-us</language>`,
});