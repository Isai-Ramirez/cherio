var mongoose = require("mongoose");
var Schema = mongoose.Schema;
// creating the schema for the notes when they get added to the article
var NoteSchema = new Schema({
  title: String,
  body: String
});
var Note = mongoose.model("notes", NoteSchema);
module.exports = Note;
