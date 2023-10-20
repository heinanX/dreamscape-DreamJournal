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
exports.deleteComment = exports.createComment = exports.getComment = exports.getComments = void 0;
const commentsModel_1 = require("./commentsModel");
// GET ALL COMMENTS FROM DB
const getComments = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comments = yield commentsModel_1.CommentsModel.find();
        res.status(200).json(comments);
    }
    catch (error) {
        next(error);
    }
});
exports.getComments = getComments;
//GET ONE COMMENT FROM DB
const getComment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comment = yield commentsModel_1.CommentsModel.findOne({ _id: req.params.id });
        res.status(200).json(comment);
    }
    catch (error) {
        next(error);
    }
});
exports.getComment = getComment;
// CREATE A COMMENT IN DATABASE
const createComment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comment = yield commentsModel_1.CommentsModel.create(req.body);
        res.status(200).json(comment);
    }
    catch (error) {
        next(error);
    }
});
exports.createComment = createComment;
// DELETE A COMMENT IN DATABASE
const deleteComment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield commentsModel_1.CommentsModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "comment deleted" });
    }
    catch (error) {
        next(error);
    }
});
exports.deleteComment = deleteComment;
