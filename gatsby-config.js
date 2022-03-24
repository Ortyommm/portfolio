const languages = require("./src/data/languages");
/** @type {import('gatsby').GatsbyConfig} */

module.exports = {
  siteMetadata: {
    siteUrl: `https://artemdev.com`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-sass",
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyForNull: "any",
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: true,
        prefixDefault: false,
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
};
