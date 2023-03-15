import { ServerEndpointOptions } from '../../core/server'

export default {
  method: 'DELETE',
  path: '/session',
  schema: {
    tags: ['Session'],
    summary: 'Sign Out',
    description: 'Destroys current session',
    security: [{ SessionAuth: [] }],
    headers: {
      type: 'object',
      required: ['session'],
      properties: {
        session: { $ref: 'SessionSchema#/properties/id' }
      }
    },

    response: {
      204: {
        description: 'Success session close',
        type: 'null'
      }
    }
  }
} as ServerEndpointOptions
