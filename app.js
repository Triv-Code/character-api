const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

// Import Routes
const charRoute = require('./routes/character');
app.use('/character', charRoute);

// Routes
app.get('/', (req, res) => { res.send('Welcome Home'); });

mongoose.connect(
  process.env.DB_CONNECTION,
  () => console.log('Connected to DB')
);

// Listener ( where the app runs ) 
app.listen(5000);
 