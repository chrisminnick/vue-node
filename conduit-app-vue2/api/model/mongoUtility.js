const data = require('./mongoMapping');

// Define and implement the Article template function
function Article(slug, title, description, body, tagList, author) {
  this.slug = slug;
  this.title = title;
  this.description = description;
  this.body = body;
  this.tagList = tagList;
  this.author = author;
}

// define the DataUtility template function
function DataUtility() {
  this.findAll = async function () {
    let result = [];
    result = await data.find();
    return result;
  };

  this.findOne = async function (slug) {
    let result = await data.findOne(slug);
    return result;
  };

  this.save = async function (newData) {
    const post = new data(newData);
    let result = await post.save();
    return result;
  };
}

function generateUniqueId() {
  const ID = require('nodejs-unique-numeric-id-generator');
  return ID.generate(new Date().toJSON());
}

module.exports = { DataUtility, Article, generateUniqueId };
