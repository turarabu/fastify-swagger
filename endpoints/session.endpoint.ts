import { ServerEndpointOptions } from '../core/server'
import SessionPostEndpoint from "./session/session.post.endpoint"
import SessionGetEndpoint from "./session/session.get.endpoint"
import SessionDeleteEndpoint from "./session/session.delete.endpoint"

export default [
  SessionPostEndpoint,
  SessionGetEndpoint,
  SessionDeleteEndpoint
] as ServerEndpointOptions[]
