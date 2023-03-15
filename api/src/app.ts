// server
import Express from "express";
import cors from "cors";

import bookRouter from "./routes/book";
import userRouter from "./routes/user";
import commentRouter from "./routes/comments";

const app = Express();
app.use(Express.json());
app.use(cors());

// routes
app.use("/user", userRouter);
app.use("/comments", commentRouter);
app.use("/books", bookRouter);

export default app;
