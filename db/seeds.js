// const Review = require('./connection').Review
var mongoose = require("./connection")
let seedData = require('./seedData')

const Review = mongoose.model("Review")

Review.remove({}, () => {
  Review.create(seedData, () => {
    process.exit()
  })
})
