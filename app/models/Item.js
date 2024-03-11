import mongoose, { Schema } from "mongoose"

mongoose.connect(process.env.MONGODB_URI)
mongoose.Promise = global.Promise

const itemSchema = new Schema({
  item: String,
  price: Number,
  aboutItem: String,
  description: String,
  categories: [String],
})

const Item = mongoose.models.Items || mongoose.model("Items", itemSchema)
export default Item
