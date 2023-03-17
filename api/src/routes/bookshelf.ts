import { Router } from "express";
import passport from "passport";

import {
    addBookToBookShelfController,
    getBookShelfByUserId,
    getBookShelfListController
} from "../controllers/bookShelf"

const router = Router();

// to create bookshelf to each user
router.post(
    "/:userId",
    addBookToBookShelfController
);

// to get all bookshelf list
router.get(
    "/", getBookShelfListController
);

router.get('/:userId', getBookShelfByUserId)

export default router;