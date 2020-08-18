const mongoose = require('mongoose')
const article = require('../models/article.js')

const deleteAll = async () => {
    await article.deleteMany({}, () => {
        console.log(`
        == All data removed!! == 
        `)
    })
}

module.exports = deleteAll