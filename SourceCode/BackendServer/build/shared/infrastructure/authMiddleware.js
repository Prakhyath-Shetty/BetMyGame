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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddlewareFactory = void 0;
var jwt = __importStar(require("jsonwebtoken"));
function authMiddlewareFactory() {
    return function (config) {
        return function (req, res, next) {
            var authHeader = req.headers["authorization"];
            var token = authHeader && authHeader.split(" ")[1];
            if (token === null) {
                res.status(403).json({ Error: "UnAuthorized" });
                return;
            }
            jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function (err, user) {
                console.error(err);
                if (err)
                    return res.status(403).json({ Error: "UnAuthorized" });
                console.log("authenticated", user);
                next(); // * pass the execution off to whatever request the client intended
            });
            next();
        };
    };
}
exports.authMiddlewareFactory = authMiddlewareFactory;
