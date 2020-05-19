if (!self.define) {
  const e = (e) => {
      "require" !== e && (e += ".js");
      let s = Promise.resolve();
      return (
        a[e] ||
          (s = new Promise(async (s) => {
            if ("document" in self) {
              const a = document.createElement("script");
              (a.src = e), document.head.appendChild(a), (a.onload = s);
            } else importScripts(e), s();
          })),
        s.then(() => {
          if (!a[e]) throw new Error(`Module ${e} didn’t register its module`);
          return a[e];
        })
      );
    },
    s = (s, a) => {
      Promise.all(s.map(e)).then((e) => a(1 === e.length ? e[0] : e));
    },
    a = { require: Promise.resolve(s) };
  self.define = (s, n, i) => {
    a[s] ||
      (a[s] = Promise.resolve().then(() => {
        let a = {};
        const c = { uri: location.origin + s.slice(1) };
        return Promise.all(
          n.map((s) => {
            switch (s) {
              case "exports":
                return a;
              case "module":
                return c;
              default:
                return e(s);
            }
          })
        ).then((e) => {
          const s = i(...e);
          return a.default || (a.default = s), a;
        });
      }));
  };
}
define("./sw.js", ["./workbox-e032be30"], function (e) {
  "use strict";
  importScripts(),
    e.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: "/", revision: "DJ0eaaxzyrGZfpH6JWtBB" },
        {
          url: "/_next/static/DJ0eaaxzyrGZfpH6JWtBB/_buildManifest.js",
          revision: "0e9b7089d899718f4f605065602a4e47",
        },
        {
          url: "/_next/static/DJ0eaaxzyrGZfpH6JWtBB/_ssgManifest.js",
          revision: "abee47769bf307639ace4945f9cfd4ff",
        },
        {
          url: "/_next/static/DJ0eaaxzyrGZfpH6JWtBB/pages/_app.js",
          revision: "83aefff5bf3460574f431cc4fa81164e",
        },
        {
          url: "/_next/static/DJ0eaaxzyrGZfpH6JWtBB/pages/_error.js",
          revision: "c8dbebda19c7bff7adf1e559875dab04",
        },
        {
          url: "/_next/static/DJ0eaaxzyrGZfpH6JWtBB/pages/index.js",
          revision: "97b5aa831b975dfff52d35678a5e4b53",
        },
        {
          url: "/_next/static/DJ0eaaxzyrGZfpH6JWtBB/pages/notes.js",
          revision: "e3cf929d89b3e5f8961119f7bd44ec86",
        },
        {
          url: "/_next/static/DJ0eaaxzyrGZfpH6JWtBB/pages/projects.js",
          revision: "590c62468369a502fe2cc3433c880a88",
        },
        {
          url: "/_next/static/DJ0eaaxzyrGZfpH6JWtBB/pages/resume.js",
          revision: "5e5bdc1431e5ab853cd21adf3b2954f5",
        },
        {
          url: "/_next/static/chunks/1f88fb53.febd380076344aad1d0d.js",
          revision: "197bf63026204b539925619517604448",
        },
        {
          url:
            "/_next/static/chunks/2443dd3491d9020e953aaec0de22568aae90cb35.63d847ff0dd487534cd0.js",
          revision: "038704c171927959a2416f7d9466c6e4",
        },
        {
          url:
            "/_next/static/chunks/702bf6a34b75f55cf981258343bb911b288afd34.a71c351ba132372346de.js",
          revision: "e88d8e76ec330c3b8ff0b453d2250d72",
        },
        {
          url: "/_next/static/chunks/commons.93f217ee7009f02d3fef.js",
          revision: "eb497450d7d34c354feaddce0b5de64d",
        },
        {
          url: "/_next/static/chunks/framework.e84fa698c7ee940652bd.js",
          revision: "0b711c3e02b0095b778e8d3a6cd216d2",
        },
        {
          url: "/_next/static/runtime/main-e22619b89e20b398391e.js",
          revision: "b5d2e2d66a419107d672f9f424a72a7f",
        },
        {
          url: "/_next/static/runtime/polyfills-41bcc23aaf3c728b6fbc.js",
          revision: "4871cbd7922e7e655faec21066732dd4",
        },
        {
          url: "/_next/static/runtime/webpack-c212667a5f965e81e004.js",
          revision: "f5e6e2fca3144cc944812cfa3547f475",
        },
        {
          url: "/apple-icon-60x60.png",
          revision: "8f8b2b3d2ede174d2cc3854a1fd1201f",
        },
        {
          url: "/favicon-16x16.png",
          revision: "c86804fcb5629d4b5d5e8099439d9b7f",
        },
        {
          url: "/favicon-32x32.png",
          revision: "0cbcefe245f1bdfed30f1b48f8351ce6",
        },
        {
          url: "/icons/icon-128x128.png",
          revision: "db7481a04968b3ad4716436d30b3e409",
        },
        {
          url: "/icons/icon-144x144.png",
          revision: "689a1926530ed6ca26db537029c1dfd7",
        },
        {
          url: "/icons/icon-152x152.png",
          revision: "98af072da209b3b297308717b06ea86c",
        },
        {
          url: "/icons/icon-192x192.png",
          revision: "7ab8c82581552c7558c5b009ffcb3cd2",
        },
        {
          url: "/icons/icon-384x384.png",
          revision: "aae6d1f552c78e06bf42aae2462a98fa",
        },
        {
          url: "/icons/icon-512x512.png",
          revision: "837ab4469c705c188326cec571ecb227",
        },
        {
          url: "/icons/icon-72x72.png",
          revision: "cb6e3fb9db7db52f0986da1ff9bab188",
        },
        {
          url: "/icons/icon-96x96.png",
          revision: "7d8348b60cdd985bd24b48cb56855c1a",
        },
        { url: "/manifest.json", revision: "688128be216cc2f753fe641590f2fcd3" },
        { url: "/profile.jpg", revision: "efe9ad5c4e85c60faff4864b608e826a" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 31536e3,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/use\.fontawesome\.com\/releases\/.*/i,
      new e.CacheFirst({
        cacheName: "font-awesome",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 1,
            maxAgeSeconds: 31536e3,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "others",
        plugins: [
          new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    );
});
