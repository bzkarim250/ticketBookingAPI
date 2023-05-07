/* eslint-disable quotes */
/* eslint-disable import/prefer-default-export */
const createTrip = {
  tags: ['Trip'],
  summary: 'Add new trip',
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            from: {
              type: 'string',
              description: 'Departure place',
              example: 'Kigali',
            },
            to: {
              type: 'string',
              description: 'Destination',
              example: 'Huye',
            },
            travelTime: {
              type: 'string',
              description: 'After every which minutes bus is avaialable',
              example: '20',
            },
            price: {
              type: 'number',
              description: 'Price per one seat on the ticket',
              example: 2600,
            },
          },
        }
      }
    }
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
  responses: {
    201: {
      description: 'Trip has been successfully added',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              status: {
                type: 'number',
                example: 201,
              },
              data: {
                type: "object",
                example: [],
              },
            },
            required: ['status', 'data'],
          },
        },
      },
    },
    400: {
      $ref: "#/components/responses/BadRequest"
    },
    401: {
      $ref: "#/components/responses/Unauthorized"
    },
    409: {
      $ref: "#/components/responses/AlreadyExists"
    },
    422: {
      $ref: "#/components/responses/UnprocessableContent"
    },
    500: {
      $ref: "#/components/responses/ServerError"
    },
  },
};

export const tripRouteDocs = {
  '/api/trip/create': {
    post: createTrip,
  }
};
