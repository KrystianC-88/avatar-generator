import App from './app';

import GeneratorController from './routes/generator/GeneratorController';
const controllers = [
    new GeneratorController(),
]

const app = new App(controllers);
app.listen()

