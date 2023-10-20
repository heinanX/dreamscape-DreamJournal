"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCat = exports.createCategory = exports.getCat = exports.getCats = void 0;
const catModel_1 = require("./catModel");
const getCats = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield catModel_1.CatModel.find();
        res.status(200).json(categories);
    }
    catch (error) {
        next(error);
    }
});
exports.getCats = getCats;
const getCat = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = yield catModel_1.CatModel.findOne({ _id: req.params.id });
        res.status(200).json(category);
    }
    catch (error) {
        next(error);
    }
});
exports.getCat = getCat;
const createCategory = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const checkCat = yield catModel_1.CatModel.findOne(req.body);
        if (!checkCat) {
            const newCategory = yield catModel_1.CatModel.create(req.body);
            res.status(201).json(newCategory);
        }
        else {
            res.status(404).json(req.body.category + ' already taken');
        }
    }
    catch (error) {
        next(error);
    }
});
exports.createCategory = createCategory;
const deleteCat = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield catModel_1.CatModel.findByIdAndDelete({ _id: req.params.id });
        res.status(200).json('category deleted');
    }
    catch (error) {
        next(error);
    }
});
exports.deleteCat = deleteCat;
