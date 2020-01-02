const mongoose = require("mongoose");

const schema = mongoose.Schema({
  c_name: {
    type: String,
    unique: true
  },
  parent: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Category"
  }
});

module.exports = mongoose.model("Category", schema, "category");
