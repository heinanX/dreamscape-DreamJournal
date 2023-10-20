"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
function validate(schema) {
    return function (req, res, next) {
        const { error } = schema.validate(req.body);
        if (!error) {
            return next();
        }
        ;
        next(error);
    };
}
exports.validate = validate;
;
