const path = require("path");

module.exports = {
  resolve: {
    fallback: {
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
      "zlib": require.resolve("browserify-zlib"),
      "path": require.resolve("path-browserify"),
      "querystring": require.resolve("querystring-es3"),
      "os": require.resolve("os-browserify/browser"),
      "http": require.resolve("stream-http"),
      "fs": false, // Some modules like `fs` are not available in the browser
      "net": false,
      "tls": false,
    },
  },
};
