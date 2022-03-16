import express from 'express';
import config from 'config';
import routes from '../routes';

const port = config.get<number>('PORT');
const app = express();

app.use(express.json());

app.listen(port,()=> {
    console.log("Hello!!! works");
    
    routes(app);

})