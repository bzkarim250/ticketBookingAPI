/* eslint-disable import/prefer-default-export */
const createAgency = {
  tags: ['Agency'],
  summary: 'Create Agency',
  requestBody: {
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            agencyName: {
              type: 'string',
              description: 'The name of the company',
              example: 'Volcano',
            },
            email: {
              type: 'string',
              description: 'The company email',
              example: 'info@volcano.rw',
            },
            address: {
              type: 'string',
              description: 'The location of business',
              example: 'Kigali Rw',
            },
            phone: {
              type: 'string',
              description: 'The company phone number',
              example: '+250780514840',
            },
            website: {
              type: 'string',
              description: 'The website of company',
              example: 'https://volcano.com',
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
      description: 'Agency registred succesfully',
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
                  agencyName: {
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
              accessToken: {
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
    409: {
      description: 'Your company alyready registred',
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
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              status: {
                type: 'number',
                example: 422,
              },
              message: {
                type: 'string',
                description: 'Invalid data input',
                example: 'Your company name must be valid and contains atleast 3 characters long',
              },
              error: {
                type: 'string',
                example: 'Unprocessable Content',
              },
            },
          },
        },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              status: {
                type: 'number',
                description: 'status code of response',
                example: 500
              },
              error: {
                type: 'string',
                example: 'SERVER_ERROR',
              },
              message: {
                type: 'string',
                description: 'Server errors',
                example: 'Error connection timeout',
              }
            },
          },
        },
      },
    },
  },
};
const getAllAgencies = {
  tags: ['Agency'],
  description: 'List all agencies',
  security: [
    {
      bearerAuth: [],
    },
  ],
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
                description: 'list of all registered agencies',
                example: 'all agencies displayed',
              },
              data: {
                type: 'object',
                example: [],
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
      description: 'Internal server error',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              status: {
                type: 'number',
                description: 'status code of response',
                example: 500
              },
              error: {
                type: 'string',
                example: 'SERVER_ERROR',
              },
              message: {
                type: 'string',
                description: 'Server errors',
                example: 'Error connection timeout',
              }
            },
          },
        },
      },
    },
  }
};

export const agencyRouteDocs = {
  '/api/agency/create': {
    post: createAgency,
  },
  '/api/agency/all': {
    get: getAllAgencies,
  }
};
