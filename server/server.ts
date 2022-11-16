import express, { Express, Request, Response } from 'express';

import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(bodyParser.json())

//routes
const dashboardRoute = require('./routes/dashboard/DasbhoardController');
app.use('/dashboard/', dashboardRoute)


app.listen(5000, () => console.log("Server listening on port 5000"))