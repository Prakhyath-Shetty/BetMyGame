import "reflect-metadata";
import express from "express";
import { InversifyExpressServer } from "inversify-express-utils";
import bodyParser from "body-parser";
import helmet from "helmet";
import container from "./shared/infrastructure/inversify.config";
import "./controller/UserController";
import "./controller/GameController";
import { clientErrorHandler, errorHandler } from "./shared/infrastructure/errorHandlers";

import * as dotenv from "dotenv";

dotenv.config();

// create express application
const app: express.Application = express();

// let express support JSON bodies
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// * setup express middleware logging and error handling
app.use(clientErrorHandler);
app.use(errorHandler);
app.use(helmet());

let server = new InversifyExpressServer(container, null, { rootPath: "/api" }, app);

let appConfigured = server.build();
let serve: any = appConfigured.listen(process.env.PORT || 8080, () => console.log(`App running on ${serve.address().port}`));
