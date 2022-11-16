import express, { Application, Express, Request, Response } from 'express';
import bodyParser from 'body-parser';

class App {
    public app: Application;
    public port: number;

    constructor(controllers: any[], port: number){
        this.app = express();
        this.port = port;

        this.initalizeControllers(controllers);
    }

    private initalizeControllers(controllers: any[]){
        controllers.forEach((controller: any) =>{
            this.app.use('/', controller.route)            
        })        
    }
}

export default App;
