const Review = require('./models.js').Review
var mongoose = require("./connection")
let seedData = require('./seedData')

Review.remove({}, () => {
  Review.create(seedData, () => {
    process.exit()
  })
})
