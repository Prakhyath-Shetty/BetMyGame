import DataAccess = require("../Connection");
import { Schema } from "mongoose";
import { IUser } from "../../shared/models";
// import { EmailValidators, UserNameValidators, PasswordValidators } from './Validators/UserValidator';
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

//TODO : check the matches and schemas before using it

class UserSchema {
  static schema() {
    var schema = new Schema({
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
      },
      createdAt: {
        type: Date,
        default: Date.now(),
      },
    });
    return schema;
  }
}
var schema = mongooseConnection.model<IUser>("User", UserSchema.schema() as any);
export = schema;
