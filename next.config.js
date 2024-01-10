const TerserPlugin = require("terser-webpack-plugin");
const redirectionsPage = require("./utils/redirection");
module.exports = {
  compress: true,
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.optimization.minimize = true;
      config.optimization.minimizer = [new TerserPlugin()];
    }
    return config;
  },
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: [
      "braininventory.s3.us-east-2.amazonaws.com",
      "d1u4arv5y5eda6.cloudfront.net",
      "braininventoryblogs.com",
    ]
  },
  async redirects() {
    const redirection = redirectionsPage();
    return redirection;
  },
};
