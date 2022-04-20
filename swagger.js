const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger_output.json";
const endPointsFile = ["./lib/routes.js"];

const doc = {
  info: {
    version: "0.1.0",
    title: "SliderX API",
    description: "Documentation for SliderX API",
  },
  host: "localhost:5000",
  basePath: "/api",
  schemes: ["http"],
};

swaggerAutogen(outputFile, endPointsFile, doc);
