import express from 'express';
import cors from 'cors';

import dbConnect from './database/db';
import route from './routes/app';

const app = express();
dbConnect();

app.use(cors());
app.use(express.json());

app.use('/api', route);

export default app;
