"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatData = void 0;
const formatData = (req, res, next) => {
    const { category } = req.body;
    const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
    req.body = { category: formattedCategory };
    next();
};
exports.formatData = formatData;
