import share from '../assets/images/businessCard.jpg';
import favicon from '../assets/images/favicon.ico';

const title = 'Gazdówka na Wierchu';
const description = 'Gazdówka na Wierchu - Biały Dunajec. Zapraszamy!';

export const helmet = {
  titleTemplate: '%s - Gazdówka na Wierchu',
  htmlAttributes: { lang: 'pl' },
  meta: [
    { name: 'description', content: description },
    { name: 'keywords', content: 'Gazdówka na Wierchu Biały Dunajec domki w górach noclegi w górach tatry tatary' },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, user-scalable=no',
    },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'blac' },
    { name: 'theme-color', content: '#ca842e' },

    { property: 'og:title', content: title },
    { property: 'og:image', content: share },
    { property: 'og:description', content: description },
    { property: 'og:image:width', content: '880px' },
    { property: 'og:image:height', content: '440px' },
    { property: 'og:image:alt', content: description },

    { name: 'twitter:title', content: title },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:image', content: share },
    { name: 'twitter:site', content: '@uenodotco' },
    { name: 'twitter:creator', content: '@uenodotco' },
    { name: 'twitter:description', content: description },
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: favicon }],
};
