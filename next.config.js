// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But one can use ES2015 features supported by your Node.js version)
const withPwa = require("next-pwa");

const debug = process.env.NODE_ENV !== "production";

module.exports = withPwa({
  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/resume": { page: "/resume" },
      "/projects": { page: "/projects" },
      "/notes": { page: "/notes" },
    };
  },
  assetPrefix: !debug ? "https://chaitanyagadodia.github.io/" : "",
  pwa: {
    dest: "public",
  },
});
