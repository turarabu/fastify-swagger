export default {
  "UserSchema": {
    title: 'User Schema',
    type: 'object',
    properties: {
      id: {
        title: 'User ID',
        description: 'User ID',
        type: 'string',
        format: 'uuid'
      },

      username: {
        title: 'User Username',
        description: 'User Username',
        type: 'string'
      },

      password: {
        title: 'User Password',
        description: 'User Password',
        type: 'string'
      }
    }
  }
}
