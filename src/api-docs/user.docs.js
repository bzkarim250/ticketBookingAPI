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
              status: {
                type: "number",
                description: "Status code of Error",
                example: 400,
              },
              error: {
                type: "string",
                description: "validation error",
                example: "BAD_REQUEST",
              },
              message: {
                type: "string",
                description: "Error message",
                example: "Invalid request body",
              }
            },
          },
        },
      },
    },
    409: {
      description: 'Account already registred',
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
    401: {
      description: "UNAUTHORIZED",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              status: {
                type: 'number',
                example: 401,
              },
              message: {
                type: "string",
                description: "wrong credentials",
                example: "Wrong password",
              },
              error: {
                type: "string",
                description: "Login failed",
                example: "UNAUTHORIZED",
              },
            },
          },
        },
      },
    },
    404: {
      description: "Not found",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              status: {
                type: 'number',
                example: 404,
              },
              message: {
                type: "string",
                description: "user not registered",
                example: "Email or username not registered",
              },
              error: {
                type: "string",
                description: "user not registerd",
                example: "NOT_FOUND",
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
              status: {
                type: 'number',
                example: 422,
              },
              message: {
                type: "string",
                description: "Invalid data input",
                example: "Email or username not registered or invalid",
              },
              error: {
                type: "string",
                example: "Unprocessable Content",
              },
            },
          },
        },
      },
    },
    500: {
      $ref: "#/components/responses/ServerError"
    },
  },
};
const getAllUsers = {
  tags: ['User'],
  description: "List all users",
  security: [
    {
      bearerAuth: [],
    },
  ],
  responses: {
    200: {
      description: "OK",
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
              message: {
                type: "string",
                description: "list of all registered users",
                example: "all users displayed",
              },
              data: {
                type: "object",
                example: [],
              },
            }
          }
        }
      }
    },
    401: {
      description: "AUTHENTICATION_ERROR",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              status: {
                type: "number",
                description: "Status code of Error",
                example: 401,
              },
              error: {
                type: "string",
                description: "authentication error",
                example: "UNAUTHORIZED",
              },
              message: {
                type: "string",
                description: "Error message",
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
const getUserById = {
  tags: ['User'],
  description: "Get user by id",
  parameters: [
    {
      name: "id",
      in: "path",
      description: "User id",
      type: "string",
      example: "61721c2f557eb8a9a9f48cc9"
    }
  ],
  security: [
    {
      bearerAuth: [],
    },
  ],
  responses: {
    200: {
      description: "Used details retrieved",
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
              message: {
                description: "User with that ID is found",
                example: "User Found Successfull",
              }
            },
          },
        },
      },
    },
    401: {
      description: "AUTHENTICATION_ERROR",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              status: {
                type: "number",
                description: "Status code of Error",
                example: 401,
              },
              error: {
                type: "string",
                description: "authentication error",
                example: "UNAUTHORIZED",
              },
              message: {
                type: "string",
                description: "Error message",
                example: "You don't have access to do that action",
              }
            }
          }
        }
      }
    },
    404: {
      description: "Not found",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              status: {
                type: 'number',
                example: 404,
              },
              message: {
                type: "string",
                description: "user not registered",
                example: "Email or username not registered",
              },
              error: {
                type: "string",
                description: "user not registerd",
                example: "NOT_FOUND",
              },
            },
          },
        },
      },
    },
    500: {
      $ref: "#/components/responses/ServerError"
    },
  }
};
const deleteUserById = {
  tags: ['User'],
  description: "Delete user by id",
  parameters: [
    {
      name: "id",
      in: "path",
      description: "User id",
      type: "string",
      example: "61721c2f557eb8a9a9f48cc9"
    }
  ],
  security: [
    {
      bearerAuth: [],
    },
  ],
  responses: {
    200: {
      description: "User deleted successfully",
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
              message: {
                description: "User with that ID is found",
                example: "User Found Successfull",
              }
            },
          },
        },
      },
    },
    401: {
      description: "AUTHENTICATION_ERROR",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              status: {
                type: "number",
                description: "Status code of Error",
                example: 401,
              },
              error: {
                type: "string",
                description: "authentication error",
                example: "UNAUTHORIZED",
              },
              message: {
                type: "string",
                description: "Error message",
                example: "You don't have access to do that action",
              }
            }
          }
        }
      }
    },
    403: {
      description: "Forbidden",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              status: {
                type: "number",
                description: "Status code of Error",
                example: 403,
              },
              message: {
                type: "string",
                description: "Unable to delete account",
                example: "Admins cannot delete their own accounts",
              },
              error: {
                type: "string",
                description: "admins can not delete their own accounts",
                example: "FORBIDDEN",
              },
            }
          }
        }
      }
    },
    404: {
      description: "Not found",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              status: {
                type: 'number',
                example: 404,
              },
              message: {
                type: "string",
                description: "user not registered",
                example: "Email or username not registered",
              },
              error: {
                type: "string",
                description: "user not registerd",
                example: "NOT_FOUND",
              },
            },
          },
        },
      },
    },
    500: {
      $ref: "#/components/responses/ServerError"
    },
  }
};

export const userRouteDocs = {
  "/api/user/signup": {
    post: createUser,
  },
  "/api/user/login": {
    post: login,
  },
  "/api/user/all": {
    get: getAllUsers,
  },
  "/api/user/{id}": {
    get: getUserById,
  },
  "/api/user/delete/{id}": {
    delete: deleteUserById,
  }
};
