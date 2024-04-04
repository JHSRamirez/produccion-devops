const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Biblioteca',
      version: '1.0.0',
      description: 'Documentación de la API de Biblioteca',
    },
    servers: [
      {
        url: 'http://localhost:3000', // URL del servidor
        description: 'Servidor local produccion',
      },
    ],
  },
  apis: ['./routes/*.js'], // Ruta a los archivos de rutas donde se definen los endpoints
};

const specs = swaggerJsdoc(options);

module.exports = { specs, swaggerUi };
