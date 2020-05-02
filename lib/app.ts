import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as mongoose from 'mongoose';

import { AppRoutes } from './routes';

dotenv.config();

class App {

    public app: express.Application;
    public appRoutes: AppRoutes = new AppRoutes();

    constructor() {
        this.app = express();
        this.config();
        this.mongoSetup();
        this.appRoutes.approutes(this.app);
    }

    private config(): void {
        // Allow Crosss Access Origin
        this.app.use(cors());
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        // https://github.com/apostrophecms/apostrophe/issues/1291#issuecomment-375928334
        this.app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
    }

    private mongoSetup(): void {
        mongoose.Promise = global.Promise;
        mongoose.connect(
            process.env.DB_CONNECTION,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            }, () => console.log('Connected to DB'));
    }

}

export default new App().app;