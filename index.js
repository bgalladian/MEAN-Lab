const express = require('express')
const MeanReview = require('./db/models.js').MeanReview
const parser = require('body-parser')
const app = express()

app.listen(3001, () => {
  console.log('Express on 3001')
})

app.get('/mean_reviews', (req, res) => {
  MeanReview.find({}, (err, mean_reviews) => {
    res.render('index', { mean_reviews})
  })
})
 app.use("/assets", express.static("publice"))
 app.use(parser.json({extended: true }))

 app.get("/api/mean_reviews", (req, res) => {
   MeanReview.find({}).then((mean_reviews) => {
     res.json(mean_reviews)
   })
 })

 app.get("*", (req, res) => {
   res.sendFile("./public/js/ng-views/index.html", { root: __dirname})
 })
