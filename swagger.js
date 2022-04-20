const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger_output.json";
const endPointsFile = ["./lib/routes.js"];

swaggerAutogen(outputFile, endPointsFile);
