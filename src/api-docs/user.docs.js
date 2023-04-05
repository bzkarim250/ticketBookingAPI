/* eslint-disable quotes */
/* eslint-disable import/prefer-default-export */
const createUser = {
  tags: ["User"],
  summary: "User signup",
  requestBody: {
    required: true,
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            username: {
              type: "string",
              description: "The user name",
              example: "clenia",
            },
            fullName: {
              type: "string",
              description: "The user fullname",
              example: "clenia T",
            },
            email: {
              type: "string",
              description: "The user email",
              example: "clenia@gmail.com",
            },
            password: {
              type: "string",
              description: "The user password",
              example: "@Solvit123",
            },
            phone: {
              type: "string",
              description: "The user phone number",
              example: "+250780514840",
            },
          },
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Signup successfully created',
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
                  username: {
                    type: 'string',
                    example: 'clenia',
                  },
                  fullName: {
                    type: 'string',
                    example: 'clenia T',
                  },
                  email: {
                    type: 'string',
                    example: 'clenia@gmail.com',
                  },
                  phone: {
                    type: 'string',
                    example: '+25078...',
                  },
                  role: {
                    type: 'string',
                    example: 'admin',
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
      description: "BAD_REQUEST",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              error: {
                type: "string",
                example: "Invalid request body",
              },
            },
          },
        },
      },
    },
    409: {
      description: "User Already Exists",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              error: {
                type: "string",
                example: "User already exists",
              },
            },
          },
        },
      },
    },
    422: {
      description: "Unprocessable Content",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              error: {
                type: "string",
                description: "Description of the error",
                example: "Email or username not registered or invalid",
              },
            },
          },
          example: {
            error: "Username or email must be valid",
          },
        },
      },
    },
    500: {
      description: "SERVER_ERROR",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              error: {
                type: "string",
                example: "Internal server error",
              },
            },
          },
        },
      },
    },
  },
};

const login = {
  tags: ["User"],
  summary: "User login",
  description: "Login",
  requestBody: {
    required: true,
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            account: {
              type: "string",
              description: "Your email or password",
              example: "admin1@gmail.com",
            },
            password: {
              type: "string",
              description: "Your password",
              example: "@Admin123",
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: "login successfully",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              status: {
                type: "number",
                description: "Status code of the request",
                example: 200,
              },
              data: {
                type: "object",
                properties: {
                  _id: {
                    type: "string",
                    description: "User ID",
                    example: "61721c2f557eb8a9a9f48cc9",
                  },
                  username: {
                    type: "string",
                    description: "User name",
                    example: "Twizerimana12",
                  },
                  fullName: {
                    type: "string",
                    description: "User fullname",
                    example: "Twizerimana Clenia",
                  },
                  email: {
                    type: "string",
                    description: "User email",
                    example: "cleniatwizerimana@gmail.com",
                  },
                  phone: {
                    type: "string",
                    description: "User phone number",
                    example: "+25078...",
                  },
                },
              },
              accessToken: {
                type: "string",
                description: "JWT token for authentication",
                example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
              },
            },
          },
        },
      },
    },
    400: {
      description: "BAD_REQUEST",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              error: {
                type: "string",
                description: "Description of the error",
                example: "Invalid request parameters",
              },
            },
          },
          example: {
            error: "Wrong password",
          },
        },
      },
    },
    404: {
      description: "Not Found",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              error: {
                type: "string",
                description: "Description of the error",
                example: "Email or username not registered",
              },
            },
          },
          example: {
            error: "Username or email not registered",
          },
        },
      },
    },
    422: {
      description: "Unprocessable Content",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              error: {
                type: "string",
                description: "Description of the error",
                example: "Email or username not registered or invalid",
              },
            },
          },
          example: {
            error: "Username or email must be valid",
          },
        },
      },
    },
    500: {
      description: "SERVER_ERROR",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              error: {
                type: "string",
                description: "Description of the error",
                example: "Internal server error",
              },
            },
          },
          example: {
            error: "Internal server error",
          },
        },
      },
    },
  },
};

export const userRouteDocs = {
  "/api/user/signup": {
    post: createUser,
  },
  "/api/user/login": {
    post: login,
  },
};
