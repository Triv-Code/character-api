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
    strength: Number,
    dexterity: Number,
    constitution: Number,
    wisdom: Number,
    intelligence: Number,
    charisma: Number,
  },
  level: {
    type: Number,
    require: true,
  },
  desc: {
    type: String,
    required: true,
  }, 
})

module.exports = mongoose.model('Character', CharacterSchema); 