/* eslint-disable quotes */
/* eslint-disable import/prefer-default-export */
const createBus = {
  tags: ['Bus'],
  summary: 'Add new Bus',
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            plateNo: {
              type: 'string',
              description: 'The plate number of bus',
              example: 'RAA344A',
            },
            seat: {
              type: 'number',
              description: 'Number of Seats',
              example: 32,
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
      description: 'Bus  succesfully added',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              status: {
                type: 'number',
                example: 201,
              },
              data: {},
            },
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
      description: 'AUTHENTICATION_ERROR',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              status: {
                type: 'number',
                description: 'Status code of Error',
                example: 401,
              },
              error: {
                type: 'string',
                description: 'authentication error',
                example: 'UNAUTHORIZED',
              },
              message: {
                type: 'string',
                description: 'Error message',
                example: "You don't have access to do that action",
              }
            }
          }
        }
      }
    },
    403: {
      description: 'Forbidden',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              status: {
                type: 'number',
                description: 'Status code of Error',
                example: 403,
              },
              message: {
                type: 'string',
                description: 'Unable to add bus',
                example: 'Company admin who has not yet registered any agency',
              },
              error: {
                type: 'string',
                description: 'You are not associated with any agency',
                example: 'FORBIDDEN',
              },
            }
          }
        }
      }
    },
    409: {
      description: 'Bus alyready registred',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              status: {
                type: 'number',
                example: 409,
              },
              error: {
                type: 'string',
                example: 'AGENCY_EXISTS',
              },
              message: {
                type: 'string',
                description: 'Register existing company error message',
                example: 'Your company alyready registred',
              }
            },
          },
        },
      },
    },
    422: {
      description: 'Unprocessable Content',
      $ref: "#/components/responses/UnprocessableContent"
    },
    500: {
      $ref: "#/components/responses/ServerError"
    },
  },
};
const getAllBuses = {
  tags: ['Bus'],
  description: 'List all buses',
  responses: {
    200: {
      description: 'OK',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              status: {
                type: 'number',
                description: 'Status code of the request',
                example: 200,
              },
              message: {
                type: 'string',
                description: 'list of all registered busies',
                example: 'all buses displayed',
              },
              data: {
                type: "object",
                example: {},
              },
            }
          }
        }
      }
    },
    401: {
      description: 'AUTHENTICATION_ERROR',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              status: {
                type: 'number',
                description: 'Status code of Error',
                example: 401,
              },
              error: {
                type: 'string',
                description: 'authentication error',
                example: 'UNAUTHORIZED',
              },
              message: {
                type: 'string',
                description: 'Error message',
                example: "You don't have access to do that action",
              }
            }
          }
        }
      }
    },
    500: {
      $ref: "#/components/responses/ServerError"
    },
  }
};

export const busRouteDocs = {
  '/api/bus/create': {
    post: createBus,
  },
  '/api/bus/all': {
    get: getAllBuses,
  }
};
