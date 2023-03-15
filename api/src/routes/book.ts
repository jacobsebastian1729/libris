import { Router } from "express";
import {
  createBook,
  getAllBooks,
  getBookByid,
  deleteBookByid,
  updateBookById,
} from "../controllers/book";
const router = Router();
router.post("/create", createBook);
router.get("/", getAllBooks);
router.get("/:bookId", getBookByid);
router.delete("/:bookId", deleteBookByid);
router.put("/:bookId", updateBookById);
export default router;
