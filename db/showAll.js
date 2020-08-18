const mongoose = require('mongoose')
const article = require('../models/article.js')

const showAll = () => {
    return new Promise(async (resolve, reject) => {
        const doc = await article.find({})
        resolve(doc)
    })
}

module.exports = showAll