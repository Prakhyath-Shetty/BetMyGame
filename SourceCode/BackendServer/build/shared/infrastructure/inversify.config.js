"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var types_1 = __importDefault(require("../constants/types"));
var UserRepository_1 = require("../../repository/UserRepository");
var UserBuisness_1 = require("../../buisness/UserBuisness");
var container = new inversify_1.Container();
//** Bind the buisness */
container
    .bind(types_1.default.UserBuisness)
    .to(UserBuisness_1.UserBuisness)
    .inSingletonScope();
//** Bind the repository */
container
    .bind(types_1.default.UserRepository)
    .to(UserRepository_1.UserRepository)
    .inSingletonScope();
exports.default = container;
