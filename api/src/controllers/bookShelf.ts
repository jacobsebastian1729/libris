import { Request, Response } from 'express';

import BookShelf, { BookShelfDocument } from '../models/Bookshelf';
import BookShelfService from '../services/bookShelf';

export const addBookToBookShelfController = async (
  req: Request,
  res: Response
) => {
  try {
    const  userId  = req.params.userId
    const  book  = req.body;

    if (!book.title || !book.author) {
      return res.status(400).json({ message: 'Invalid request' });
    }

    const bookshelfOfUser: BookShelfDocument | null = await BookShelf.findOne({
      userId,
    });

    if (!bookshelfOfUser) {
      const bookshelf = await BookShelf.create({
        userId,
        books: [book._id],
      });
      return res.status(201).json({
        bookshelf,
        message: 'Bookshelf created successfully',
      });
    }

    const existingBookIndex = bookshelfOfUser.books.findIndex(
      (bookId) => bookId.toString() === book._id.toString()
    );

    if (existingBookIndex !== -1) {
      return res
        .status(400)
        .json({ message: 'Book already exists in your bookshelf' });
    } else {
      bookshelfOfUser.books.push(book._id);
      await bookshelfOfUser.save();
      return res.status(200).json({
        bookshelfOfUser,
        message: 'Book added to bookshelf successfully',
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getBookShelfListController = async (req: Request, res: Response) => {
  try {
    const bookShelfList = await BookShelf.find().populate('books').populate('userId');
    res.status(200).json({ bookShelfList });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getBookShelfByUserId = async (req: Request, res: Response) => {
  try {
    const userId  = req.params.params
    const bookShelf = await BookShelf.find().populate('userId')
    
    if (!bookShelf) {
      return res.status(404).json({ message: 'Bookshelf not found' });
    }
    
    res.status(200).json({ bookShelf });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
};
