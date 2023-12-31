"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
var custom_error_1 = require("../errors/custom-error");
var errorHandler = function (error, req, res, next) {
    if (error instanceof custom_error_1.CustomError) {
        return res.status(error.statusCode).send({ errors: error.serializeErrors() });
    }
    return res.status(400).send({
        errors: [{ message: "Something went wrong" }],
    });
};
exports.errorHandler = errorHandler;
