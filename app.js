const Hapi = require("@hapi/hapi");
const articleRoutes = require("./routes/article");

// Initialize Hapi server
const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost",
  });

  // Register routes from article.js
  server.route(articleRoutes);

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

// Handle unhandled rejections
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err);
  process.exit(1);
});

init();
