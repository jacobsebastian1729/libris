// server
import Express from "express";
import cors from "cors";
import commentsRouter from "./routes/comments";
import booksRouter from "./routes/book";
import userRouter from "./routes/user";
import bookShelfRouter from "./routes/bookShelf"


const app = Express();
app.use(Express.json());
app.use(cors());

// routes
app.use('/user', userRouter);
app.use("/bookshelves", bookShelfRouter)
app.use("/comments", commentsRouter);
app.use("/books", booksRouter);
export default app;
