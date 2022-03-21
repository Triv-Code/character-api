const mongoose = require('mongoose');

// Defines the shape of data for the DB Collection
const CharacterSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  stats: {
    type: Object,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  }, 
})

module.exports = mongoose.model('Character', CharacterSchema); 