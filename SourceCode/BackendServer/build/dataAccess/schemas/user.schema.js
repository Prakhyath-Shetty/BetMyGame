"use strict";
var DataAccess = require("../Connection");
var mongoose_1 = require("mongoose");
// import { EmailValidators, UserNameValidators, PasswordValidators } from './Validators/UserValidator';
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;
//TODO : check the matches and schemas before using it
var UserSchema = /** @class */ (function () {
    function UserSchema() {
    }
    Object.defineProperty(UserSchema, "schema", {
        get: function () {
            var schema = new mongoose_1.Schema({
                firstName: {
                    type: String,
                    required: true,
                    minlength: 2,
                    maxLength: 20,
                },
                lastName: {
                    type: String,
                    required: true,
                    minlength: 2,
                    maxLength: 20,
                },
                userName: {
                    type: String,
                    required: true,
                    unique: true,
                    lowercase: true,
                    match: /^[a-zA-Z0-9]+$/,
                    minlength: 4,
                    maxlength: 15,
                },
                phone: {
                    type: String,
                    required: true,
                    unique: true,
                },
                email: {
                    type: String,
                    required: true,
                    unique: true,
                    match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                },
                password: {
                    type: String,
                    required: true,
                    match: /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/,
                },
                createdAt: {
                    type: Date,
                    default: Date.now(),
                },
            });
            return schema;
        },
        enumerable: false,
        configurable: true
    });
    return UserSchema;
}());
var schema = mongooseConnection.model("User", UserSchema.schema);
module.exports = schema;
