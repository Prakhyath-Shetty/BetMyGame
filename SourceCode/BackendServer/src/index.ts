import "reflect-metadata";
import express from "express";
import container from "./shared/infrastructure/inversify.config";
import { InversifyExpressServer } from "inversify-express-utils";
import "./controller/UserController";

// create express application
const app: express.Application = express();
// let express support JSON bodies
// app.use(bodyParser.json());

// // grabs the Controller from IoC container and registers all the endpoints
// const controllers: any[] = container.getAll<
//   any
// >(TYPES.Controller);
// controllers.forEach((controller) => controller.register(app));

// setup express middleware logging and error handling
app.use(function (
  err: Error,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) {
  console.error(err.stack);
  next(err);
});

app.use(function (err: Error, req: express.Request, res: express.Response) {
  res.status(500).send("Internal Server Error");
});

let server = new InversifyExpressServer(
  container,
  null,
  { rootPath: "/api" },
  app
);

let appConfigured = server.build();
let serve: any = appConfigured.listen(
  process.env.PORT || 3000,
  () => `App running on ${serve.address().port}`
);
