"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.clientErrorHandler = void 0;
exports.clientErrorHandler = function (err, req, res, next) {
    if (req.xhr) {
        res.status(500).send({ error: "Something failed!" });
    }
    else {
        next(err);
    }
};
exports.errorHandler = function (err, req, res, next) {
    res.status(500);
    res.render("error", { error: err });
};
