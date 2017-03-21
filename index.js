var express = require('express')
// var Review = require('./db/models.js').Review
var parser = require('body-parser')
var hbs = require("express-handlebars")
var mongoose = require ('./db/connection')

var app = express()

var Review = mongoose.model("Review");

app.set("port", process.env.PORT || 3001);
app.set("view engine", "hbs");
app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout"
}));



app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
  // Review.find({}, (err, meanReviews) => {
  //   res.render('index', { meanReviews})
  // })
})
 app.use("/assets", express.static("public"))
 app.use(parser.json({extended: true }))

 app.get("/api/mean_reviews", (req, res) => {
   Review.find({}).then((meanReviews) => {
     res.json(meanReviews)
   })
 })

 app.get("/api/mean_reviews/:name", function(req, res){
  Review.findOne({name: req.params.name}).then(function(review){
    res.json(review)
  });
});

app.post("/api/mean_reviews", function(req, res){
  Review.create(req.body).then(function(review){
    res.json(review)
  });
});

app.post("/api/mean_reviews/:name/delete", function(req, res){
  Review.findOneAndRemove({name: req.params.name}).then(function(){
    res.json({success: true})
  });
});

app.put("/api/mean_reviews/:name", function(req, res){
  Review.findOneAndUpdate({name: req.params.name}, req.body, {new: true}).then(function(review){
    res.json(review)
  });
});

 app.get("*", (req, res) => {
   res.sendFile("./public/js/ng-views/index.html", { root: __dirname})
 })

 app.listen(3001, () => {
   console.log('Express on 3001')
 })
