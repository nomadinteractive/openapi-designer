exports.schema = {
  title: 'Open API designer',
  type: 'object',
  properties: {
    swagger: {
      type: 'string',
      title: 'Swagger Version',
      required: true,
      default: '2.0',
      enum: ['2.0'],
    },
    info: {
      type: 'object',
      title: 'Info',
      properties: {
        title: {
          type: 'string',
          title: 'Title',
          required: true,
        },
        version: {
          type: 'string',
          title: 'Version',
          required: true,
        },
        termsOfService: {
          type: 'string',
          title: 'Terms of Service',
        },
        contact: {
          title: 'Contact',
          type: 'object',
          properties: {
            name: {
              type: 'string',
              title: 'Name',
            },
            url: {
              type: 'string',
              format: 'url',
              title: 'URL',
            },
            email: {
              type: 'string',
              format: 'email',
              title: 'Email',
            },
          },
        },
        license: {
          title: 'License',
          type: 'object',
          properties: {
            name: {
              type: 'string',
              title: 'Name',
              required: true,
            },
            url: {
              type: 'string',
              format: 'url',
              title: 'URL',
            },
          },
        },
        host: {
          type: 'string',
          title: 'Host',
        },
        basePath: {
          type: 'string',
          title: 'Base path',
        },
      },
    },
    schemes: {
      title: 'Schemes',
      type: 'array',
      items: {
        title: 'Scheme',
        type: 'string',
        enum: ['http', 'https', 'ws', 'wss'],
      },
      minItems: 1,
    },
    consumes: {
      title: 'Consumes',
      type: 'array',
      items: {
        title: 'MIME type',
        type: 'string',
      },
      minItems: 1,
    },
    produces: {
      title: 'Produces',
      type: 'array',
      items: {
        title: 'MIME type',
        type: 'string',
      },
      minItems: 1,
    },
    paths: {
      title: 'Paths',
      type: 'array',
      items: {
        type: 'object',
        properties: {
          _key: {
            title: 'Path',
            type: 'string',
          },
          methods: {
            title: 'Methods',
            type: 'array',
            items: {
              type: 'object',
              properties: {
                _key: {
                  title: 'Method',
                  type: 'string',
                  enum: ['get', 'put', 'post', 'delete', 'options', 'head', 'patch'],
                },
                tags: {
                  title: 'Tags',
                  type: 'array',
                  items: {
                    type: 'string',
                  },
                },
                summary: {
                  title: 'Summary',
                  type: 'string',
                  maxLength: 120,
                },
                description: {
                  title: 'Description',
                  type: 'string',
                },
                externalDocs: {
                  title: 'External Documentation',
                  type: 'object',
                  properties: {
                    url: {
                      title: 'URL',
                      type: 'string',
                      format: 'url',
                      required: true,
                    },
                    description: {
                      title: 'Description',
                      type: 'string',
                    },
                  },
                },
                operationId: {
                  title: 'Operation ID',
                  type: 'string',
                },
                schemes: {
                  title: 'Schemes',
                  type: 'array',
                  items: {
                    title: 'Scheme',
                    type: 'string',
                    enum: ['http', 'https', 'ws', 'wss'],
                  },
                  minItems: 1,
                },
                consumes: {
                  title: 'Consumes',
                  type: 'array',
                  items: {
                    title: 'MIME type',
                    type: 'string',
                  },
                  minItems: 1,
                },
                produces: {
                  title: 'Produces',
                  type: 'array',
                  items: {
                    title: 'MIME type',
                    type: 'string',
                  },
                  minItems: 1,
                },
                parameters: {
                  title: 'Parameters',
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      name: {
                        title: 'Name',
                        type: 'string',
                        required: true,
                      },
                      in: {
                        title: 'Parameter location',
                        type: 'string',
                        default: 'path',
                        enum: ['query', 'header', 'path', 'formData', 'body'],
                        required: true,
                      },
                      description: {
                        title: 'Description',
                        type: 'string',
                      },
                      required: {
                        title: 'Required',
                        type: 'boolean',
                        required: true,
                      },
                    },
                  },
                },
              },
            },
          },
          parameters: {
            title: 'Parameters',
            type: 'array',
            items: {
              type: 'object',
              properties: {
                name: {
                  title: 'Name',
                  type: 'string',
                  required: true,
                },
                in: {
                  title: 'Parameter location',
                  type: 'string',
                  default: 'path',
                  enum: ['query', 'header', 'path', 'formData', 'body'],
                  required: true,
                },
                description: {
                  title: 'Description',
                  type: 'string',
                },
                required: {
                  title: 'Required',
                  type: 'boolean',
                  required: true,
                },
              },
            },
          },
        },
      },
    },
  },
};
