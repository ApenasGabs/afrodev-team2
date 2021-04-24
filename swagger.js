const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = ['./adapters/api/routes/ong.js', './adapters/api/routes/medicines.js', './adapters/api/routes/expenses.js'];

swaggerAutogen(outputFile, endpointsFiles);
