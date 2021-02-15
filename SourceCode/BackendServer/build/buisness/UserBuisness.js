"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBuisness = void 0;
var inversify_1 = require("inversify");
var jwt = __importStar(require("jsonwebtoken"));
var types_1 = __importDefault(require("../shared/constants/types"));
var UserBuisness = /** @class */ (function () {
    function UserBuisness(userRepository) {
        this._userRepository = userRepository;
    }
    UserBuisness.prototype.signup = function (item) {
        var _this = this;
        var p = new Promise(function (resolve, reject) {
            _this._userRepository
                .create(item)
                .then(function (res) {
                resolve(res);
            })
                .catch(function (error) {
                reject(error.message);
            });
        });
        return p;
    };
    //TODO : provide token cant be in here, change it later
    UserBuisness.prototype.login = function (item) {
        var _this = this;
        console.log("ILoginModel", item);
        var userInfo = new Promise(function (resolve, reject) {
            _this._userRepository
                .findOne({ userName: item.userName, password: item.password }, {}, {})
                .then(function (res) {
                if (res) {
                    // TODO : return the token
                    var accessToken = jwt.sign({ _id: res._id, userName: res.userName }, process.env.ACCESS_TOKEN_SECRET, {
                        expiresIn: 86400000,
                    });
                    var authResponce = {
                        firstName: res.firstName,
                        lastName: res.lastName,
                        userName: res.userName,
                        phone: res.phone,
                        accessToken: accessToken,
                    };
                    resolve(authResponce);
                }
                else {
                    reject("Username or password incorrect'");
                }
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return userInfo;
    };
    //TODO : Change it, it cant be return user password vs vs
    UserBuisness.prototype.getProfile = function (_id) {
        var _this = this;
        var p = new Promise(function (resolve, reject) {
            _this._userRepository
                .findById(_id)
                .then(function (user) {
                if (user) {
                    resolve(user);
                }
                else {
                    reject("User Not Found");
                }
            })
                .catch(function (error) {
                reject(error.message);
            });
        });
        return p;
    };
    UserBuisness = __decorate([
        inversify_1.injectable(),
        __param(0, inversify_1.inject(types_1.default.UserRepository))
    ], UserBuisness);
    return UserBuisness;
}());
exports.UserBuisness = UserBuisness;
