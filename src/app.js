import express from 'express';
import cors from 'cors';
import dbConnect from './database/db';

const app = express();
dbConnect();

app.use(cors());
app.use(express.json());

export default app;
