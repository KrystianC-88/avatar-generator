import express, { Application, Express, Request, Response } from 'express';
import mongoose from 'mongoose'
import bodyParser from 'body-parser';
import cors from 'cors'
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

class App {
    public app: Application;
    public port: number;

    constructor(controllers: any[]) {
        this.app = express();
        // @ts-ignore
        this.port = parseInt(process.env.SERVER_PORT);

        this.connectToDatabase();
        this.initalizeMiddlewares();
        this.initalizeControllers(controllers);
    }

    private initalizeControllers(controllers: any[]) {
        controllers.forEach((controller: any) => {
            this.app.use('/', controller.router)
        })
    }

    private initalizeMiddlewares() {
        this.app.use(bodyParser.json())
        this.app.use(cors())

    }

    private connectToDatabase() {
        const {
            MONGO_USER,
            MONGO_PASSWORD,
            MONGO_PATH,
        } = process.env;
        
        mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@127.0.0.1:27018/${MONGO_PATH}`).then(() => console.log("MongoDB connected"));
    }

    public listen() {
        this.app.listen(this.port, () => console.log(`Server started on port ${this.port}`))
    }

}

export default App;
