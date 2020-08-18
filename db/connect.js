const mongoose = require('mongoose')

const mongoConnect = () => {
    var uri = 'mongodb://localhost:27017/su_database'
    mongoose.connect(uri, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify:false })
    const connection = mongoose.connection
    connection.once('open', () => {
        console.log(`
    MongoDB connected!
    `)
    })
}

module.exports = mongoConnect