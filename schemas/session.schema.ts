export default {
  "SessionSchema": {
    title: 'Session Schema',
    type: 'object',
    properties: {
      id: {
        title: 'Session ID',
        description: 'Session ID',
        type: 'string',
        format: 'uuid'
      }
    }
  }
}
