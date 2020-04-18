// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But one can use ES2015 features supported by your Node.js version)

const debug = process.env.NODE_ENV !== "production";

module.exports = {
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/resume": { page: "/resume" },
      "/projects": { page: "/projects" },
      "/notes": { page: "/notes" }
    };
  },
  assetPrefix: !debug ? "https://chaitanyagadodia.github.io/" : ""
  /* webpack: (config, { dev }) => {
    // Perform customizations to webpack config
    // console.log('webpack');
    // console.log(config.module.rules, dev);
    // Important: return the modified config
    return config
  },
  webpackDevMiddleware: (config) => {
    // Perform customizations to webpack dev middleware config
    // console.log('webpackDevMiddleware');
    // console.log(config);
    // Important: return the modified config
    return config
  }, */
};
