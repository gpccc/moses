/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

const {languages, defaultLanguage} = require('./languages')
const siteUrl = process.env.URL || 'https://gpccc.netlify.app/'

module.exports = {
  trailingSlash: 'always',
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/locales`,
        name: 'locale'
      }
    },
    {
      resolve: '@herob/gatsby-plugin-react-i18next',
      options: {
        localeJsonSourceName: 'locale', // name given to 'gatsby-source-filesystem' plugin.
        languages,
        defaultLanguage,
        siteUrl,
        // if you are using trailingSlash gatsby config include it here, as well (the default is 'always')
        trailingSlash: 'always',
        i18nextOptions: {
          defaultNS: 'common',
          debug: true,
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
          keySeparator: false,
          nsSeparator: false,
        },
        pages: [
          /*
          {
            matchPath: '/:lang?/blog/:uid',
            getLanguageFromPath: true,
            excludeLanguages: ['es'],
          },
          {
            matchPath: '/ignored-page',
            languages: ['en'],
          }
          */
        ]
      }
    }   
  ],
}