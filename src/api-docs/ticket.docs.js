/* eslint-disable quotes */
/* eslint-disable import/prefer-default-export */
const createTicket = {
  tags: ['Ticket'],
  summary: 'Create Ticket',
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            agency: {
              type: 'string',
              description: 'The name of the company',
              example: 'Volcano',
            },
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
            numberOfTickets: {
              type: 'number',
              description: 'Number of tickets you need',
              example: 3,
            },
            departureTime: {
              type: 'date',
              description: 'departure time',
              example: '2023-05-15T08:30:00.000Z',
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
      description: 'Your ticket has been successfully booked',
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
                type: 'object',
                properties: {
                  _id: {
                    type: 'string',
                    example: '612a1bdeaa15c07f6cf0a165',
                  },
                  name: {
                    type: 'string',
                    example: 'volcano',
                  },
                  email: {
                    type: 'string',
                    example: 'info@volcano.rw',
                  },
                  address: {
                    type: 'string',
                    example: 'Kigali Rw',
                  },
                  phone: {
                    type: 'string',
                    example: '+25078...',
                  },
                  website: {
                    type: 'string',
                    example: 'https://volcano.com',
                  },
                },
              },
            },
            required: ['status', 'data'],
          },
        },
      },
    },
    400: {
      description: 'BAD_REQUEST',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              status: {
                type: 'number',
                description: 'Status code of Error',
                example: 400,
              },
              error: {
                type: 'string',
                description: 'validation error',
                example: 'BAD_REQUEST',
              },
              message: {
                type: 'string',
                description: 'Error message',
                example: 'Invalid request body',
              }
            },
          },
        },
      },
    },
    401: {
      $ref: "#/components/responses/Unauthorized"
    },
    422: {
      $ref: "#/components/responses/UnprocessableContent"
    },
    500: {
      $ref: "#/components/responses/ServerError"
    },
  },
};

export const ticketRouteDocs = {
  '/api/ticket/create': {
    post: createTicket,
  }
};
