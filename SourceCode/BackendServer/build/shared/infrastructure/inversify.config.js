"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var types_1 = __importDefault(require("../constants/types"));
var business_1 = require("../../business");
var repository_1 = require("../../repository");
var container = new inversify_1.Container();
/**
 * * Bind the buisness
 * ? register buisness if anyone created added new buisness
 */
container.bind(types_1.default.UserBusiness).to(business_1.UserBusiness).inSingletonScope();
container.bind(types_1.default.GameBusiness).to(business_1.GameBusiness).inSingletonScope();
/**
 * * Bind the repository
 * ? register repository if anyone created new repository
 */
container.bind(types_1.default.UserRepository).to(repository_1.UserRepository).inSingletonScope();
container.bind(types_1.default.GameRepository).to(repository_1.GameRepository).inSingletonScope();
exports.default = container;
