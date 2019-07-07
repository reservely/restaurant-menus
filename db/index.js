const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/reservly';

const db = mongoose.connect(mongoUri, { useNewUrlParser: true });

module.exports = db;
