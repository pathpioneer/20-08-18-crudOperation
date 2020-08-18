const mongoose = require('mongoose')
const article = require('../models/article')

const insert = (i_title, i_author, i_discription) => {
    var data = new article({
        title: i_title,
        author: i_author,
        discription: i_discription
    })
    data.save((err, doc) => {
        if (err) {
            console.log(err)
            return
        }
        console.log(`
        == Data inserted ==
        title: ${data.title}
        author: ${data.author}
        discription: ${data.discription}
        `)
    })
}

module.exports = insert