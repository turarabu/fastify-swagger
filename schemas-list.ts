import UserSchema from "./schemas/user.schema"
import SessionSchema from "./schemas/session.schema"

export default {
  ...UserSchema,
  ...SessionSchema
}
