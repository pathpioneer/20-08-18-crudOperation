const mongoose = require('mongoose')
const article = require('../models/article.js')

const deleteThis = async (data) => {
    await article.findOneAndDelete({_id: data}, (err, result) => {
        if(err) {
            console.log(err)
        }
        console.log(`
        == Item deleted ==
        `)
    })
}

module.exports = deleteThis