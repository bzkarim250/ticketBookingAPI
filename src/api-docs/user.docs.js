/* eslint-disable import/prefer-default-export */
const createUser = {
  tags: ['User'],
  summary: 'User signup',
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            username: {
              type: 'string',
              description: 'The user name',
              example: 'clenia',
            },
            fullName: {
              type: 'string',
              description: 'The user fullname',
              example: 'clenia T',
            },
            email: {
              type: 'string',
              description: 'The user email',
              example: 'clenia@gmail.com',
            },
            password: {
              type: 'string',
              description: 'The user password',
              example: '@Solvit123',
            },
            phone: {
              type: 'string',
              description: 'The user phone number',
              example: '+250780514840',
            },
          },
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Created - The user was successfully created',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              status: {
                type: 'string',
                example: 'success',
              },
              data: {
                type: 'object',
                properties: {
                  _id: {
                    type: 'string',
                    example: '612a1bdeaa15c07f6cf0a165',
                  },
                  username: {
                    type: 'string',
                    example: 'angel',
                  },
                  email: {
                    type: 'string',
                    example: 'angelique@gmail.com',
                  },
                },
              },
              token: {
                type: 'string',
                example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
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
              error: {
                type: 'string',
                example: 'Invalid request body',
              },
            },
          },
        },
      },
    },
    409: {
      description: 'User Already Exists',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              error: {
                type: 'string',
                example: 'User already exists',
              },
            },
          },
        },
      },
    },
    500: {
      description: 'SERVER_ERROR',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              error: {
                type: 'string',
                example: 'Internal server error',
              },
            },
          },
        },
      },
    },
  },
};

export const userRouteDocs = {
  '/api/user/signup': {
    post: createUser,
  },
};
