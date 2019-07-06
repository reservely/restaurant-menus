const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

let restaurantSchema = new mongoose.Schema({
  restaurant_id: Number,
  website: String,
  menus: [{
    menu_name: String,
    menu_description: String,
    sections: [{
      section_name: String,
      section_description: String,
      items: [{
        item_name: String,
        item_description: String,
        item_price: String,
        item_option: String
      }]
    }]
  }]
});


const Restaurant = mongoose.model('Menu', restaurantSchema);

module.exports = Restaurant;
