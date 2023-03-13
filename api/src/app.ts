// server
import Express from 'express';
import cors from 'cors';

const app = Express();
app.use(Express.json());
app.use(cors());

// routes

export default app;