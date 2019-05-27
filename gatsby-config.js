module.exports = {
  siteMetadata: {
    siteUrl: "https://uptonchance.com",
    title: "uptonchance | Casey Chance & Lauren Upton's Seattle Summer Wedding",
    author: "Casey Chance",
    meta: [{
      name: "description", content: "Casey Chance and Lauren Upton are getting married on September 7, 2019. This site has everything you need to know about attending the event."    }, {
      name: "keywords", content: "wedding, casey chance, lauren upton, seattle, summer, washington, september, 2019",
    }]
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/heart.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/data/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`,
      },
    },
      {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: "GTM-WCZKJM7",

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // Specify optional GTM environment details.
        // gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_AUTH_STRING",
        // gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_PREVIEW_NAME",
        // dataLayerName: "YOUR_DATA_LAYER_NAME",
      },
    },
  ],
}
