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
exports.deleteRating = exports.createRating = exports.getRating = exports.getRatings = void 0;
const contRateModel_1 = require("./contRateModel");
const getRatings = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ratings = yield contRateModel_1.contentRatingModel.find();
        res.status(200).json(ratings);
    }
    catch (error) {
        next(error);
    }
});
exports.getRatings = getRatings;
const getRating = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rating = yield contRateModel_1.contentRatingModel.findOne({ _id: req.params.id });
        res.status(200).json(rating);
    }
    catch (error) {
        next(error);
    }
});
exports.getRating = getRating;
const createRating = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existingRating = yield contRateModel_1.contentRatingModel.findOne({ rating: req.body.rating });
        if (existingRating) {
            return res.status(400).json('already registered');
        }
        const rating = yield contRateModel_1.contentRatingModel.create(req.body);
        res.status(201).json(rating);
    }
    catch (error) {
        next(error);
    }
});
exports.createRating = createRating;
const deleteRating = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield contRateModel_1.contentRatingModel.findByIdAndDelete({ _id: req.params.id });
        res.status(201).json('rating deleted');
    }
    catch (error) {
        next(error);
    }
});
exports.deleteRating = deleteRating;
