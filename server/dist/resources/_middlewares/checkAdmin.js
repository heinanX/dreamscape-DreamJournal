"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAdmin = void 0;
const checkAdmin = (req, res, next) => {
    var _a;
    if ((_a = req.session) === null || _a === void 0 ? void 0 : _a.isAdmin) {
        next();
    }
    else {
        res.status(403).json({ message: `Access denied. You don't have permission to perform this action.` });
    }
};
exports.checkAdmin = checkAdmin;
