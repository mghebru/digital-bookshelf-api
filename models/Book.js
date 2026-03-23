import mongoose from "mongoose";

const { Schema } = mongoose; // Destructure Schema from mongoose
 
 const bookSchema = new Schema({
  title: {
    type: String,
     requires: [true, 'title is required'],},
  author:{
    type: String, 
    required: [true, 'author is required'],},
  isbn:{
    type: String,
     unique: true,},
  publishDate: Date,
  isVerified: Boolean
});

// Create model
const Book = mongoose.model("Book", bookSchema);

export default Book;