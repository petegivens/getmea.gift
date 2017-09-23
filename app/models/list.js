var mongoose = require('mongoose');

var listSchema = mongoose.Schema({
  title: {type: String, required: true},
  id: Number,
  user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  secret: Boolean,
  items: Array
})

var List = mongoose.model('List', listSchema);


module.exports = List;