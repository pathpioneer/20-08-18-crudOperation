const mongoose = require('mongoose')
const article = require('../models/article.js')

const updateThis = async (titles, authors, diss, nowID) => {
    var nowItem = await article.findByIdAndUpdate(nowID, {
        title: titles,
        author: authors,
        discription: diss
    }, (err, result) => {
        if(err) {
            console.log(err)
            return
        }
        console.log(`
        == item updated ==
        `)
    })
}

module.exports = updateThis