"use strict";
var Mongoose = require("mongoose");
var DataAccess = /** @class */ (function () {
    function DataAccess() {
        DataAccess.connect();
    }
    DataAccess.connect = function () {
        if (this.mongooseInstance)
            return this.mongooseInstance;
        this.mongooseConnection = Mongoose.connection;
        this.mongooseConnection.once("open", function () {
            console.log("MongoDB connected.");
        });
        console.log("MongoDB connection started");
        this.mongooseInstance = Mongoose.connect("mongodb://localhost/ECommerce");
        this.mongooseInstance.Promise = global.Promise;
        return this.mongooseInstance;
    };
    return DataAccess;
}());
DataAccess.connect();
module.exports = DataAccess;
