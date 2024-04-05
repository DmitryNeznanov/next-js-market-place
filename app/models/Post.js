import mongoose, { Schema } from "mongoose"

mongoose.connect(process.env.MONGODB_URI)
mongoose.Promise = global.Promise
const postSchema = new Schema({
  post: String,
  author: String,
  date: Date,
  categories: [String],
  img: {
    src: String,
    width: Number,
    height: Number,
    alt: String,
  },
})

const Post = mongoose.models.posts || mongoose.model("posts", postSchema)
export default Post
