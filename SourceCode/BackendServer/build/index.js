"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var inversify_express_utils_1 = require("inversify-express-utils");
var body_parser_1 = __importDefault(require("body-parser"));
var helmet_1 = __importDefault(require("helmet"));
var inversify_config_1 = __importDefault(require("./shared/infrastructure/inversify.config"));
require("./controller/UserController");
require("./controller/GameController");
var errorHandlers_1 = require("./shared/infrastructure/errorHandlers");
var dotenv = __importStar(require("dotenv"));
dotenv.config();
// create express application
var app = express_1.default();
// let express support JSON bodies
app.use(body_parser_1.default.urlencoded({
    extended: true,
}));
app.use(body_parser_1.default.json());
// * setup express middleware logging and error handling
app.use(errorHandlers_1.clientErrorHandler);
app.use(errorHandlers_1.errorHandler);
app.use(helmet_1.default());
var server = new inversify_express_utils_1.InversifyExpressServer(inversify_config_1.default, null, { rootPath: "/api" }, app);
var appConfigured = server.build();
var serve = appConfigured.listen(process.env.PORT || 8080, function () { return console.log("App running on " + serve.address().port); });
