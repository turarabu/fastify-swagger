import { ServerEndpointOptions } from '../../core/server'

export default {
  method: 'GET',
  path: '/session',
  schema: {
    tags: ['Session'],
    summary: 'Session info',
    description: 'Returns `User` of current session',
    security: [{ SessionAuth: [] }],
    headers: {
      type: 'object',
      required: ['session'],
      properties: {
        session: { $ref: 'SessionSchema#/properties/id' }
      }
    },

    response: {
      200: {
        description: 'Default response',
        type: 'object',
        properties: {
          error: {
            type: 'boolean',
            const: false
          },

          user: {
            type: 'object',
            required: ['id', 'username'],
            properties: {
              id: { $ref: 'UserSchema#/properties/id' },
              username: { $ref: 'UserSchema#/properties/username' }
            }
          }
        }
      }
    }
  }
} as ServerEndpointOptions
