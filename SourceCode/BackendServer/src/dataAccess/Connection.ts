import Mongoose = require("mongoose");

class DataAccess {
  static mongooseInstance: any;
  static mongooseConnection: Mongoose.Connection;

  constructor() {
    DataAccess.connect();
  }

  static connect(): Mongoose.Connection {
    if (this.mongooseInstance) return this.mongooseInstance;

    this.mongooseConnection = Mongoose.connection;
    this.mongooseConnection.once("open", () => {
      console.log("MongoDB connected.");
    });
    console.log("MongoDB connection started");
    this.mongooseInstance = Mongoose.connect("mongodb://localhost/ECommerce");
    this.mongooseInstance.Promise = global.Promise;
    return this.mongooseInstance;
  }
}

DataAccess.connect();
export = DataAccess;
