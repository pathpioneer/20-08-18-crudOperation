const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema({
    title: { type: String, unique: true },
    author: String,
    discription: String
})

// collection articles //
const article = mongoose.model('article', articleSchema)
module.exports = article