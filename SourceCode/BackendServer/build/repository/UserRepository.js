"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
var inversify_1 = require("inversify");
var UserRepository = /** @class */ (function () {
    function UserRepository() {
    }
    UserRepository.prototype.findOne = function (username) {
        //
        return {
            id: 1,
            username: "Prakhyath shetty",
            phone: "9844986072",
            password: "prakhyth@123",
        };
    };
    UserRepository.prototype.findAll = function () {
        //
        return {
            id: 1,
            username: "Prakhyath shetty",
            phone: "9844986072",
            password: "prakhyth@123",
        };
    };
    UserRepository.prototype.create = function (post) {
        //
    };
    UserRepository.prototype.findById = function (id) {
        //
    };
    UserRepository.prototype.update = function (id, post) {
        //
    };
    UserRepository.prototype.delete = function (id) {
        //
    };
    UserRepository = __decorate([
        inversify_1.injectable()
    ], UserRepository);
    return UserRepository;
}());
exports.UserRepository = UserRepository;
