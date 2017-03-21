const mongoose = require("./connection.js")
const MeanReviewSchema = new mongoose.Schema({
  name: String,
  cost: Number,
  description: String,
  imageUrl: String
})

const MeanReview = mongoose.model('MeanReview', MeanReviewSchema)

module.exports = {
  MeanReview
}
