"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
var inversify_1 = require("inversify");
var inversify_express_utils_1 = require("inversify-express-utils");
var types_1 = __importDefault(require("../shared/constants/types"));
var UserController = /** @class */ (function () {
    function UserController(userBuisness) {
        this._userBuisness = userBuisness;
    }
    UserController.prototype.getAll = function (req, res) {
        var _a = req;
        var user = this._userBuisness.getUser("");
        res.send(user);
    };
    __decorate([
        inversify_express_utils_1.httpGet("/"),
        __param(0, inversify_express_utils_1.request()),
        __param(1, inversify_express_utils_1.response())
    ], UserController.prototype, "getAll", null);
    UserController = __decorate([
        inversify_express_utils_1.controller("/v1/user"),
        __param(0, inversify_1.inject(types_1.default.UserBuisness))
    ], UserController);
    return UserController;
}());
exports.UserController = UserController;
