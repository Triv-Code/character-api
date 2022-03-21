const express = require('express');
const router = express.Router();
const Character = require('../models/Character');

// Call All Characters
router.get('/', (reg, res) => {
  Character.find()
    .then(data => res.status(200).json(data))
    .catch(err => ({ message: err }));
});

// Call Individual Character
router.get('/:charId', (req, res) => {
  Character.find({ name: req.params.charId })
    .then(data => res.status(200).json(data))
    .catch(err => res.status(404).json({ message: err }));
})

// Create Character
router.post('/', (req, res) => {
  // Model defines shape of DB Collection Data
  const character = new Character({
    name: req.body.name,
    image: req.body.image,
    stats: req.body.stats,
    desc: req.body.desc
  })

  character.save()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json({ message: err });
    });
});

// Update Character
router.patch('/:charId', (req, res) => {
  Character.updateOne(
      { name: req.params.charId }, 
      // Allows update of one or more properties
      { $set: { name: req.body.name,
                stats: req.body.stats,
                image: req.body.image,
                desc: req.body.desc
      } }
    )
    .then(data => res.status(200).json(data))
    .catch(err => res.status(404).json({ message: err }));
})

// Delete Character
router.delete('/:charId', (req, res) => {
  Character.remove({ name: req.params.charId })
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json({ message: err }));
});

module.exports = router;