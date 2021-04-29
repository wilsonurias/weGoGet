const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false,
  },
  post: {
    type: String,
    required: true,
  },
  microsoftId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Post', PostSchema)
