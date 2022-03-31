const mongoose = require('mongoose');

// Defines the shape of data for the DB Collection
const CharacterSchema = mongoose.Schema({
  // Characters Name
  name: {
    type: String,
    required: true,
  },
  // Character Image (Add Multer?)
  image: {
    type: String,
    required: false,
  },
  // Character Status (30 Max)
  stats: {
    strength: Number,
    dexterity: Number,
    constitution: Number,
    wisdom: Number,
    intelligence: Number,
    charisma: Number,
  },
  // Character Level
  level: {
    type: Number,
    require: true,
  },
  // Character Description
  desc: {
    type: String,
    required: true,
  }, 
})

module.exports = mongoose.model('Character', CharacterSchema); 