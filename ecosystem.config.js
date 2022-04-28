module.exports = {
  apps: [
    {
      name: "sliderx",
      script: "./app.js",
      watch: ["app.js"],
      ignore: ["node_modules"],
      instances: "max",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
