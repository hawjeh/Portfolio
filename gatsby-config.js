const siteUrl = process.env.URL || `https://www.hawjeh.com`

module.exports = {
  siteMetadata: {
    title: `Haw Jeh`,
    siteUrl: siteUrl,
    description: 'Haw Jeh portfolio and blogging site',
    keywords: 'Haw Jeh, Portfolio, Software Developer, Resume, CV, Software Engineer, System Thinker, Efficient, Creative, Fun, Coding, Keep Coding, Keep Fighting, Integration'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
        {
          allSitePage(
            sort: {fields: path}
            filter: {path: {nin: ["/404.html", "/404/", "/dev-404-page/", "/sitemap/", "/auth/", "/sitefinity-certification-v14/", "/search/"]}}
          ) {
            nodes {
              path
            }
          }
        }
      `,
        resolveSiteUrl: () => siteUrl,
        resolvePages: ({
          allSitePage: { nodes: allPages },
        }) => {
          return allPages
        },
        serialize: ({ path, modifiedGmt }) => {
          return {
            url: path,
            lastmod: modifiedGmt,
          }
        },
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/img`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/data`
      }
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1035,
              sizeByPixelDensity: true,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.hawjeh.com',
        sitemap: 'https://www.hawjeh.com/sitemap/sitemap-index.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    }
  ]
};