require('dotenv').config()

const mongoose = require('mongoose')
mongoose.Promise = global.Promise

module.exports = mongoose.connect('mongodb://localhost/todo', {
    "auth": { "authSource": "admin" },
    "user": process.env.ROOT_USERNAME,
    "pass": process.env.ROOT_PASSWORD,
    "useMongoClient": true
})