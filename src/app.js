import express from 'express';
import cors from 'cors';

import dbConnect from './database/db';
import route from './routes/app';
import swaggerDocs from './api-docs/swagger';

const app = express();
dbConnect();

app.use(cors());
app.use(express.json());
swaggerDocs(app);
app.use('/api', route);

export default app;
