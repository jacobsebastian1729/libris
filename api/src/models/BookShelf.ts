import mongoose, { Document } from "mongoose";
import { BookDocument } from "./Book";

export type BookShelfDocument = Document & {
    BookDocument: BookDocument[];
    userId: string
};

const BookShelfSchema = new mongoose.Schema({
    BookDocument: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Book'
        }
    ],
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
})

export default mongoose.model<BookShelfDocument>("BookShelf", BookShelfSchema);