var router = require('express').Router()
var path = require('path')
var Tweet = require('../models/tweet.js')


router.get('/api/tweet', function(req, res) {
  Tweet.findAll().then(function(tweets){
    res.send(tweets)
  })
})

router.post('/api/tweet', function(req, res){
  Tweet.create({
    tweet: req.body.tweet
  }).then(function (){
    res.send('made it')
  })
})

router.put('/api/tweet/:id', function(req, res) {
  Tweet.update({
    tweet: req.body.tweet},
    {where: {
      id: req.params.id
    }
  }).then(function(){
    res.send("edited")
  })
})

router.delete('/api/tweet/:id', function(req, res) {
  Tweet.destroy({
    where: {
      id: req.params.id
    }
  }).then(function() {
    res.send("deleted!!!")
  })
})

module.exports = router
