const express = require('express')
//const articles = require('./routes/api/articles')
const articles = require('./routes/api/mongoRouter')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')

app.use(cors())
app.use(morgan('tiny'))
app.use(express.json())
app.use('/api', articles)  // change this

async function connect() {
    //await mongoose.connect("mongodb://localhost:27017/test")
    await mongoose.connect("mongodb://mongo:27017/test")
    console.log('database is created')
}

connect()

// try {
//     await mongoose.connect("mongodb://localhost:27017/test")
//     console.log('database is created')

//     app.get('/', (req, res) => {
//         res.send('This is the home page')
//     })
    
//     const server = app.listen(process.env.port || 3000, () => {
//        console.log('Listening on port - mongoApp ' + server.address().port)
//     })

// }catch(error) {
//     console.log(error)
// }

app.get('/', (req, res) => {
    res.send('This is the home page')
})

const server = app.listen(process.env.port || 3000, () => {
   console.log('Listening on port - mongoApp ' + server.address().port)
})


