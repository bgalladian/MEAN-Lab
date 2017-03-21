const mongoose = require("./connection.js")
const ReviewSchema = new mongoose.Schema(
{
  name: String,
  cost: Number,
  description: String,
  imageUrl: String
}
)

mongoose.model("Review", ReviewSchema)
mongoose.connect("mongodb://localhost/mean_reviews")
// const Review = mongoose.model('Review', ReviewSchema)

module.exports = {
  Review
}
