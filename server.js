'use strict'

// statements //
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const article = require('./models/article')
const insert = require('./db/insert.js')
const showAll = require('./db/showAll.js')
const deleteAll = require('./db/deleteAll.js')
const deleteThis = require('./db/deleteThis.js')
const updateThis = require('./db/update.js')

// pug //
const pug = require('pug')
const templateCompiler = pug.compileFile('./views/main.pug')

// mongoDB connect //
const mongoose = require('mongoose')
const mongoConnect = require('./db/connect.js')
const { deleteOne, estimatedDocumentCount, update } = require('./models/article')
mongoConnect()

// middleware //
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// setting //
app.set('view engines', 'pug')
mongoose.set('useCreateIndex', true)

// get //
app.get('/', (req, res) => {
    showAll().then(doc => res.render('main.pug', {doc:doc}))
})

// deleteAll //
app.get('/delete', (req, res) => {
    deleteAll()
    res.redirect('/')
})

// deleteThis //
app.get('/deletethis/:id', (req, res) => {
    deleteThis(req.params.id)
    res.redirect('/')
})

// update //
app.get('/edit/:id', (req, res) => {
    res.render('update.pug')
})

app.post('/edit/:id', (req, res) => {
    var n_title = req.body.new_title
    var n_author = req.body.new_author
    var n_discription = req.body.new_discription
    var nowID = req.params.id
    updateThis(n_title, n_author, n_discription, nowID)
    res.redirect('/')
})

// post //
app.post('/', (req, res) => {
    var i_title = req.body.name_title
    var i_author = req.body.name_author
    var i_discription = req.body.name_discription
    insert(i_title, i_author, i_discription)
    res.redirect('/')
})

// server connect //
app.listen(port, () => {
    console.log(`
    Server is running on port ${port}
    `)
})