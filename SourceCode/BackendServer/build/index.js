"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var inversify_config_1 = __importDefault(require("./shared/infrastructure/inversify.config"));
var inversify_express_utils_1 = require("inversify-express-utils");
require("./controller/UserController");
// create express application
var app = express_1.default();
// let express support JSON bodies
// app.use(bodyParser.json());
// // grabs the Controller from IoC container and registers all the endpoints
// const controllers: any[] = container.getAll<
//   any
// >(TYPES.Controller);
// controllers.forEach((controller) => controller.register(app));
// setup express middleware logging and error handling
app.use(function (err, req, res, next) {
    console.error(err.stack);
    next(err);
});
app.use(function (err, req, res) {
    res.status(500).send("Internal Server Error");
});
var server = new inversify_express_utils_1.InversifyExpressServer(inversify_config_1.default, null, { rootPath: "/api" }, app);
var appConfigured = server.build();
var serve = appConfigured.listen(process.env.PORT || 3000, function () { return "App running on " + serve.address().port; });
