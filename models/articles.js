var mongoose = require("mongoose");
var Schema = mongoose.Schema;
// creating new schemas for when we do the scrape
var ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  note: {
    type: Schema.Types.ObjectId,
    ref: "Note"
  }
});
var Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;
