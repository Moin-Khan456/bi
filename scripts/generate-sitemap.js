const sitemap = require("nextjs-sitemap-generator");

const path = require("path");

sitemap({
  baseUrl: "https://braininventory.in",
  pagesDirectory: path.resolve(__dirname, "../"),
  targetDirectory: path.resolve(__dirname, "../"),
  ignoredExtensions: [
    "map",
    "xml",
    "json",
    "png",
    "css",
    "jpeg",
    "jpg",
    "icon",
    "d",
    ".config",
    ".config.js",
    "MD",
    ".gitignore",
  ],
  ignoredPaths: [
    404,
    "favicon",
    "index",
    "node_modules",
    "api",
    "scripts",
    "admin",
    "about",
    "lottie_animation",
    "components",
    ".next",
    "lib",
    "public",
    "server",
    "styles",
    "utils",
  ],
  extraPaths: ["/"],
});
