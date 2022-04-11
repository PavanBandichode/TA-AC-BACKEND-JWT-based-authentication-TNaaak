let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let commentSchema = new Schema({
  title: String,
  likes: { type: String, default: 0 },
  CreatedBy: { type: Schema.Types.ObjectId, ref: "User" },
  Book: { type: Schema.Types.ObjectId, ref: "Book" },
});

let Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;
