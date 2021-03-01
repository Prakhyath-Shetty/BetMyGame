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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoryBase = void 0;
var inversify_1 = require("inversify");
var mongoose_1 = require("mongoose");
require("reflect-metadata");
var RepositoryBase = /** @class */ (function () {
    function RepositoryBase(schemaModel) {
        this._model = schemaModel;
    }
    // getName(): string {
    //     return 'Base';
    // }
    RepositoryBase.prototype.create = function (item, callback) {
        var self = this;
        var p = new Promise(function (resolve, reject) {
            self._model.create(item, function (err, res) {
                if (callback) {
                    callback(err, res);
                }
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            });
        });
        return p;
    };
    RepositoryBase.prototype.retrieve = function (callback) {
        var self = this;
        var p = new Promise(function (resolve, reject) {
            self._model.find({}, function (err, res) {
                if (callback) {
                    callback(err, res);
                }
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            });
        });
        return p;
    };
    RepositoryBase.prototype.findById = function (id, callback) {
        var self = this;
        var p = new Promise(function (resolve, reject) {
            self._model.findById(id, function (err, res) {
                if (callback) {
                    callback(err, res);
                }
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            });
        });
        return p;
    };
    RepositoryBase.prototype.findOne = function (cond, fields, options, callback) {
        var self = this;
        var p = new Promise(function (resolve, reject) {
            self._model.findOne(cond, fields, options).exec(function (err, res) {
                if (callback) {
                    callback(err, res);
                }
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            });
        });
        return p;
    };
    RepositoryBase.prototype.find = function (cond, fields, options, sortOptions, callback) {
        var _this = this;
        var p = new Promise(function (resolve, reject) {
            var query = _this._model.find(cond, fields, options);
            if (sortOptions) {
                query = query.sort(sortOptions);
            }
            query.exec(function (err, res) {
                if (callback) {
                    callback(err, res);
                }
                if (err) {
                    reject(err);
                }
                else {
                    resolve(res);
                }
            });
        });
        return p;
    };
    RepositoryBase.prototype.count = function (cond) {
        var self = this;
        var p = new Promise(function (resolve, reject) {
            self._model.count(cond, function (err, count) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(count ? count : 0);
                }
            });
        });
        return p;
    };
    RepositoryBase.prototype.save = function (item, callback) {
        var p = new Promise(function (resolve, reject) {
            item.save(function (err, result) {
                if (callback) {
                    callback(err, result);
                }
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
        return p;
    };
    RepositoryBase.prototype.upsert = function (cond, item, callback) {
        var self = this;
        var p = new Promise(function (resolve, reject) {
            var options = {
                upsert: true,
            };
            self._model.findOneAndUpdate(cond, item, options, function (err, result) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
        return p;
    };
    RepositoryBase.prototype.findByIdAndPush = function (_id, item, callback) {
        var self = this;
        var p = new Promise(function (resolve, reject) {
            var options = {
                new: true,
            };
            self._model.findByIdAndUpdate(_id, { $push: item }, options, function (err, result) {
                console.log(item);
                if (err) {
                    reject(err);
                }
                else {
                    resolve(result);
                }
            });
        });
        return p;
    };
    RepositoryBase.prototype.delete = function (_id, callback) {
        var _this = this;
        var self = this;
        var p = new Promise(function (resolve, reject) {
            self._model.remove({ _id: _this.toObjectId(_id) }, function (err) {
                if (callback) {
                    callback(err);
                }
                if (err) {
                    reject(err);
                }
                else {
                    resolve(true);
                }
            });
        });
        return p;
    };
    RepositoryBase.prototype.deleteAll = function (callback) {
        var self = this;
        var p = new Promise(function (resolve, reject) {
            self._model.remove({}, function (err) {
                if (callback) {
                    callback(err);
                }
                if (err) {
                    reject(err);
                }
                else {
                    resolve(true);
                }
            });
        });
        return p;
    };
    RepositoryBase.prototype.toObjectId = function (_id) {
        return mongoose_1.Types.ObjectId.createFromHexString(_id);
    };
    RepositoryBase = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.unmanaged())
    ], RepositoryBase);
    return RepositoryBase;
}());
exports.RepositoryBase = RepositoryBase;
