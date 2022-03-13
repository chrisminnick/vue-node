const mongoose = require("mongoose")

const schema =  mongoose.Schema({
    slug: String,
    title: String,
    description: String,
    body: String,
    tagList: String,
    author: String
})

module.exports = mongoose.model("Article", schema)