const mongoose = require ('mongoose')

mongoose.connect('mongodb://localhost/mean_reviews', (err) => {
  if(err) {
    console.log(err)
  } else {
    console.log("Praise the MONGOD")
  }
})

module.exports = mongoose
