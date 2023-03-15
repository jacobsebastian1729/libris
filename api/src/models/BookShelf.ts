import mongoose, { Document } from "mongoose";

export type BookShelfDocument = Document & {
    BookDocument: [];
    userId: string
};

const BookShelfSchema = new mongoose.Schema({
    BookDocument: {
        type: Array
    },
    userId: {
        type: String
    }
})

export default mongoose.model<BookShelfDocument>("BookShelf", BookShelfSchema);