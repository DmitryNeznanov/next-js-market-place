import mongoose, { Schema } from "mongoose"
mongoose.connect(process.env.MONGODB_URI)
mongoose.Promise = global.Promise
const sessionSchema = new Schema({
  userId: Schema.Types.ObjectId,
  email: String,
  sessionStart: Date,
})

const Session =
  mongoose.models.sessions || mongoose.model("sessions", sessionSchema)
export default Session
