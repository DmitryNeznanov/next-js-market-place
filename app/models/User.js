import mongoose, { Schema } from "mongoose"

mongoose.connect(process.env.MONGODB_URI)
mongoose.Promise = global.Promise
const userSchema = new Schema({
  email: String,
  password: String,
})

const UserSchema = mongoose.models.users || mongoose.model("users", userSchema)
export default UserSchema
