// server
import cors from 'cors';
import Express from 'express';

import userRouter from './routes/user';
import commentsRouter from "./routes/comments";
import bookShelfRouter from "./routes/bookShelf"
import booksRouter from "./routes/book";

const app = Express();
app.use(Express.json());
app.use(cors());

// routes
app.use("/bookshelves", bookShelfRouter)
app.use("/user", userRouter);
app.use("/books", booksRouter);
app.use("/comments", commentsRouter);

export default app;
