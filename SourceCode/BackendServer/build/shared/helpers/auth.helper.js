"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Authorize = void 0;
var authMiddleware_1 = require("../infrastructure/authMiddleware");
exports.Authorize = authMiddleware_1.authMiddlewareFactory();
