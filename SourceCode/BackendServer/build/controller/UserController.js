"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
var inversify_1 = require("inversify");
var inversify_express_utils_1 = require("inversify-express-utils");
var types_1 = __importDefault(require("../shared/constants/types"));
var auth_helper_1 = require("../shared/helpers/auth.helper");
var UserController = /** @class */ (function (_super) {
    __extends(UserController, _super);
    function UserController(userBusiness) {
        var _this = _super.call(this) || this;
        _this._userBusiness = userBusiness;
        return _this;
    }
    UserController.prototype.login = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var query, userName, password, loginData, authData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = req.query;
                        userName = "prakhyath";
                        password = "123456@qeewt";
                        loginData = {
                            userName: userName,
                            password: password,
                        };
                        if (!(userName && password)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this._userBusiness.login(loginData)];
                    case 1:
                        authData = _a.sent();
                        return [2 /*return*/, res.send(authData)];
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    UserController.prototype.register = function (req, res) {
        var _a = req;
        var registerData = {
            firstName: "prakhyath",
            lastName: "shetty",
            userName: "prakhyath",
            phone: "9844986072",
            email: "prakhyath@mail.com",
            password: "123456@qeewt",
            passwordVerify: "123456",
        };
        var user = this._userBusiness.signup(registerData);
        res.status(200).send({ user: user });
    };
    UserController.prototype.getUserById = function (req, res) {
        var _a = req;
        var user = this._userBusiness.getProfile("5f82b45eaa510f0cb80434a8");
        res.status(200).send({ user: user });
    };
    __decorate([
        inversify_express_utils_1.httpGet("/login"),
        __param(0, inversify_express_utils_1.request()), __param(1, inversify_express_utils_1.response())
    ], UserController.prototype, "login", null);
    __decorate([
        inversify_express_utils_1.httpGet("/register"),
        __param(0, inversify_express_utils_1.request()), __param(1, inversify_express_utils_1.response())
    ], UserController.prototype, "register", null);
    __decorate([
        inversify_express_utils_1.httpGet("/test", auth_helper_1.Authorize({ role: "user" })),
        __param(0, inversify_express_utils_1.request()), __param(1, inversify_express_utils_1.response())
    ], UserController.prototype, "getUserById", null);
    UserController = __decorate([
        inversify_express_utils_1.controller("/v1/user"),
        __param(0, inversify_1.inject(types_1.default.UserBusiness))
    ], UserController);
    return UserController;
}(inversify_express_utils_1.BaseHttpController));
exports.UserController = UserController;
