import { ServerEndpointOptions } from './core/server'
import SessionEndpoint from './endpoints/session.endpoint'

export default [
  ...SessionEndpoint
] as ServerEndpointOptions[]
