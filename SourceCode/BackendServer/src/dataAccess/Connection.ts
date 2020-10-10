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
    Mongoose.set("useCreateIndex", true);
    this.mongooseInstance = Mongoose.connect("mongodb://localhost:27017", { useNewUrlParser: true, useUnifiedTopology: true });
    this.mongooseInstance.Promise = global.Promise;
    return this.mongooseInstance;
  }
}

DataAccess.connect();
export = DataAccess;
