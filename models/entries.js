// Require mongoose
var mongoose = require("mongoose");
// Create Schema class
var Schema = mongoose.Schema;

// Create article schema
var EntrySchema = new Schema({
  UserId: {
    type: String,
    required: true
  },
  // title is a required string
  feeling: {
    type: Schema.ObjectId,
    ref: "Feeling"
  },

  // link is a required string
  thought: {
    type: String,
    required: true
  },
  time: {
    type: Date,
    default: Date.now
  }
});

// Create the Article model with the ArticleSchema
var Entry = mongoose.model("Entry", EntrySchema);

// Export the model
module.exports = {
  Entry: Entry
} 