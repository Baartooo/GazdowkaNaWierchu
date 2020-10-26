require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const path = require('path');

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
};

// if you want to use the preview API please define
// CONTENTFUL_HOST in your environment config
// the `host` property should map to `preview.contentful.com`
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST;
}

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.',
  );
}

module.exports = {
  siteMetadata: {
    title: 'Gazdówka na Wierchu',
    siteUrl: 'https://www.gazdowkanawierchu.pl/',
  },
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    `gatsby-plugin-sass`,
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-svg',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout/Layout.tsx`),
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-PCVSRDM',

        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        defaultDataLayer: { platform: 'gatsby' },
      },
    },
  ],
};
