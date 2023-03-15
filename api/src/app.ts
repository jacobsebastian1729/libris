// server
import Express from "express";
import cors from "cors";

import booksRouter from "./routes/book";
import userRouter from "./routes/user";
import commentsRouter from "./routes/comments";
import bookShelfRouter from "./routes/bookShelf"

const app = Express();
app.use(Express.json());
app.use(cors());

// routes
app.use("/user", userRouter);
app.use("/books", booksRouter);
app.use('/', bookShelfRouter);
app.use("/comments", commentsRouter);

export default app;
