import { Request, Response } from "express";

import BookShelf from "../models/Bookshelf";
import BookShelfService from "../services/bookshelf";

export const createBookShelf = async (
    req: Request,
    res: Response
) => {
    try {
        const newBookShelf = new BookShelf({
            userId: req.params.userId,
            bookList: req.params.bookList,
        });
        const bookShelfList = await BookShelfService.createBookShelf(newBookShelf)
        res.json(bookShelfList)
    } catch (error) {
        console.log(error)
    }
};

export const getBookShelfByUserId = async (
    req: Request,
    res: Response
) => {
    try {
        const foundBookShelf = await BookShelfService.getBookShelfByUserId(req.params.id);
        res.json(foundBookShelf)
    } catch (error) {
        console.log(error)
    }
}