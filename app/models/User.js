import mongoose, { Schema } from "mongoose"

mongoose.connect(process.env.MONGODB_URI)
mongoose.Promise = global.Promise
const userSchema = new Schema({
  email: String,
  password: String,
})

const User = mongoose.models.users || mongoose.model("users", userSchema)
export default User
