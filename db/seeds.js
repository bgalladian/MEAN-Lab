const MeanReview = require('./models.js').MeanReview
let seedData = require('./seedData.json')

MeanReview.remove({}, () => {
  MeanReview.create(seedData, () => {
    process.exit()
  })
})
