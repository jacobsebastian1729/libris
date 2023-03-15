import BookShelf, { BookShelfDocument } from "../models/Bookshelf";

const createBookShelf = async (
    bookShelf: BookShelfDocument
): Promise<BookShelfDocument> => {
    return bookShelf.save()
};

const getBookShelfByUserId = async (
    userIdFromRequest: string
): Promise<BookShelfDocument[]> => {
    return BookShelf.find({ userId: userIdFromRequest }).populate("userId");
};

export default { createBookShelf, getBookShelfByUserId };