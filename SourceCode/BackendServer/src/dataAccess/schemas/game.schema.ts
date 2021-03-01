import DataAccess = require("../Connection");
import { Schema } from "mongoose";
import { IGame } from "../../shared/models";
// import { EmailValidators, UserNameValidators, PasswordValidators } from './Validators/UserValidator';
var mongooseConnection = DataAccess.mongooseConnection;

//TODO : check the matches and schemas before using it

class GameSchema {
  static schema() {
    var schema = new Schema({
      title: {
        type: String,
        required: true,
        minlength: 2,
        maxLength: 20,
      },
      decription: {
        type: String,
        required: true,
        minlength: 2,
        maxLength: 20,
      },
      status: {
        type: Number,
        required: true,
        minlength: 2,
        maxLength: 20,
      },
      createdBy: {
        type: String,
      },
      createdAt: {
        type: Date,
        default: Date.now(),
      },
    });
    return schema;
  }
}
var schema = mongooseConnection.model<IGame>("Game", GameSchema.schema() as any);
export = schema;
