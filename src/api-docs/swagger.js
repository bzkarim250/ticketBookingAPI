import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { userRouteDocs } from './user.docs';
import { agencyRouteDocs } from './agency.docs';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      version: '1.0.0',
      title: 'BusWise',
      description: 'BusWise API documentation',
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Development server',
      },
      {
        url: 'https://shy-gray-wombat-gear.cyclic.app',
        description: 'Production server',
      },
    ],
    tags: [
      { name: 'User', description: 'User Routes' },
      { name: 'Agency', description: 'Agency Routes' },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },

    paths: { ...userRouteDocs, ...agencyRouteDocs },
  },
  apis: ['../routes/**/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get('/api-docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
};

export default swaggerDocs;
