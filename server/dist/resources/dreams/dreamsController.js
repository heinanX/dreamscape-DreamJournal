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
exports.deleteDream = exports.createDream = exports.getDream = exports.getDreams = void 0;
const dreamsModel_1 = require("./dreamsModel");
const getDreams = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dreams = yield dreamsModel_1.DreamsModel.find();
        res.status(200).json(dreams);
    }
    catch (error) {
        next(error);
    }
});
exports.getDreams = getDreams;
const getDream = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const dream = yield dreamsModel_1.DreamsModel.find({ _id: req.params.id });
        res.status(200).json(dream);
    }
    catch (error) {
        next(error);
    }
});
exports.getDream = getDream;
const createDream = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newDream = yield dreamsModel_1.DreamsModel.create(req.body);
        res.status(201).json(newDream);
    }
    catch (error) {
        next(error);
    }
});
exports.createDream = createDream;
const deleteDream = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield dreamsModel_1.DreamsModel.findOneAndDelete({ _id: req.params.id });
        res.status(204).json('dream deleted');
    }
    catch (error) {
        next(error);
    }
});
exports.deleteDream = deleteDream;
