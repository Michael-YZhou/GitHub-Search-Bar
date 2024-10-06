const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  // Proxy requests to the server running at http://localhost:5001
  app.use(
    // The first argument is the base URL that the proxy will intercept
    createProxyMiddleware("/api1", {
      target: "http://localhost:5001", // The URL of the server to forward the request to
      changeOrigin: true, // Changes the origin of the host header to the target URL
      pathRewrite: {
        "^/api1": "", // Removes the base URL from the request
      },
    })
  );

  app.use(
    createProxyMiddleware("/api2", {
      target: "http://localhost:5002",
      changeOrigin: true,
      pathRewrite: {
        "^/api2": "",
      },
    })
  );
};
