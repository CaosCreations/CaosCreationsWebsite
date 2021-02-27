module.exports = {
  siteMetadata: {
    title: `Caos Creations`,
    description: `An Indie Game Dev Studio.`,
    author: `@sabien`,
    siteUrl: `https://gatsby-starter-fresh.netlify.app`,
    keywords: [
      "game dev",
      "indie",
      "indie dev",
      "bunny hop",
      "bhop",
      "game studio",
    ],
    social: {
      steam: 'CaosCreations',
      twitter: `CaosCreations`,
      github: `CaosCreations`,
      email: `caos.creations.llc@gmail.com`,
      formspree: 'https://formspree.io/xvovpavz'
    },
    image: '/fresh.png',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-sass',
    'gatsby-plugin-root-import',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fresh Theme`,
        short_name: `fresh`,
        start_url: `/`,
        background_color: `#331B97`,
        theme_color: `#331B97`,
        display: `minimal-ui`,
        icon: `src/images/jj-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-images`,
          {
            resolve: `gatsby-remark-highlight-code`,
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "<GA Code>",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false,
        // Setting this parameter is optional
        anonymize: false,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Delays sending pageview hits on route update (in milliseconds)
        pageTransitionDelay: 0,
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`
  ],
}
