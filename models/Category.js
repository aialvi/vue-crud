var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define collection and schema for Items
var Category = new Schema({
  name: {
    type: String
  },
},
  {
    collection: 'categories'
});

module.exports = mongoose.model('Category', Category);