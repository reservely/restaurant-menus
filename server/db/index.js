const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/restaurant-menus';

const db = mongoose.connect(mongoUri, {useNewUrlParser: true});

module.exports = db;