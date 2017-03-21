const mongoose = require ('mongoose')
const ReviewSchema = new mongoose.Schema (
  {
    name: String,
    cost: Number,
    description: String,
    imageUrl: String
  }
)


mongoose.model("Review", ReviewSchema)
mongoose.connect('mongodb://localhost/mean_reviews', (err) => {
  if(err) {
    console.log(err)
  } else {
    console.log("Praise the MONGOD")
  }
})

module.exports = mongoose
