module.exports = {
  siteMetadata: {
    title: `zoltansimon.me blog - contact - portfolio`,
    description: `My  Gatsby project with this Material UI with Contentful`,
    author: `@zsim0n`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Work Sans\:300,400,700`,
          `Roboto Mono`,
          `Roboto`,
          `Roboto Condensed\:700`,
        ],
        display: 'swap',
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `zoltansimon-me`,
        short_name: `zoltansimon-me`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      // If you want to use styled components, in conjunction to Material-UI, you should:
      // - Change the injection order
      // - Add the plugin
      // options: {
      //  stylesProvider: {
      //    injectFirst: true,
      //  },
      // },
    },
    // 'gatsby-plugin-styled-components',

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
