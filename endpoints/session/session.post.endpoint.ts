import { ServerEndpointOptions } from '../../core/server'

export default {
  method: 'POST',
  path: '/session',
  schema: {
    description: 'Returns `Session ID`',
    tags: ['Session'],
    summary: 'Sign In',
    body: {
      type: 'object',
      required: ['username', 'password'],
      properties: {
        username: { $ref: 'UserSchema#/properties/username' },
        password: { $ref: 'UserSchema#/properties/password' }
      }
    },

    response: {
      201: {
        description: 'Success authorization',
        type: 'object',
        properties: {
          error: {
            type: 'boolean',
            const: false
          },

          sessionID: { $ref: 'SessionSchema#/properties/id' }
        }
      },

      400: {
        description: 'Failed authorization',
        type: 'object',
        properties: {
          error: {
            type: 'boolean',
            const: true
          },

          message: {
            type: 'string',
            default: 'ERROR:SESSION:WRONG_USERNAME_OR_PASSWORD'
          }
        }
      }
    }
  }
} as ServerEndpointOptions
