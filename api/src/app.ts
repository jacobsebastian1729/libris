// server
import Express from 'express';
import cors from 'cors';

import userRouter from './routes/user';

const app = Express();
app.use(Express.json());
app.use(cors());

// routes
app.use('/user', userRouter);

export default app;
