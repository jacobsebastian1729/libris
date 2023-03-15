import { Router } from "express";
import passport from "passport";

import {
    createBookShelf,
    getBookShelfByUserId
} from "../controllers/bookShelf"

const router = Router();

router.post(
    "/:userId",
    passport.authenticate("jwt", { session: false }),
    createBookShelf
);
router.get(
    "/:userId",
    passport.authenticate("jwt", { session: false }),
    getBookShelfByUserId
);

export default router;