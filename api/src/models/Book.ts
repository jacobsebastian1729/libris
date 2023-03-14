import mongoose from "mongoose";
import { Document } from "mongoose";
export type BookDocument = Document & {
  title: string;
  thumbnail: string;
  language: string;
  description: string;
  rating: number;
  // author:AuthorDocument
  //comments:CommentsDocuments
  //genre:GenreDocuments
};

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  thumbnail: {
    type: String,
  },
  language: {
    type: String,
  },
  description: {
    type: String,
  },
  rating: {
    type: Number,
  },
  category: {
    type: String,
  },
  /* gener:{
    {type:GenreSchema},
    ref:"genre"
  } */
  /*  comments:[ {type:CommentsSchema}],
  ref:"comments"),
  author: {
    {type:AuthorSchema},
    ref: "author",
  }, */
});

export default mongoose.model<BookDocument>("Book", BookSchema);
