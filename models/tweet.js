let sequelize = require('./index.js')
let Sequelize = require('sequelize')

var Tweet = sequelize.define("Tweet", {
    tweet: Sequelize.STRING(140)
});

module.exports = Tweet
