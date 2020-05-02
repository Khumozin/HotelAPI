"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const routes_1 = require("./routes");
dotenv.config();
class App {
    constructor() {
        this.appRoutes = new routes_1.AppRoutes();
        this.app = express();
        this.config();
        this.mongoSetup();
        this.appRoutes.approutes(this.app);
    }
    config() {
        // Allow Crosss Access Origin
        this.app.use(cors());
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        // https://github.com/apostrophecms/apostrophe/issues/1291#issuecomment-375928334
        this.app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
    }
    mongoSetup() {
        mongoose.Promise = global.Promise;
        mongoose.connect(process.env.DB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, () => console.log('Connected to DB'));
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map