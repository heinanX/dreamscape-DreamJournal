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
exports.deleteLanguage = exports.createLanguage = exports.getLanguage = exports.getLanguages = void 0;
const langModel_1 = require("./langModel");
const getLanguages = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const langs = yield langModel_1.LanguageModel.find();
        res.status(200).json(langs);
    }
    catch (error) {
        next(error);
    }
});
exports.getLanguages = getLanguages;
const getLanguage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const language = yield langModel_1.LanguageModel.findOne({ _id: req.params.id });
        res.status(200).json(language);
    }
    catch (error) {
        next(error);
    }
});
exports.getLanguage = getLanguage;
const createLanguage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { language } = req.body;
        const formattedData = language.charAt(0).toUpperCase() + language.slice(1).toLowerCase();
        const newLang = yield langModel_1.LanguageModel.create({ language: formattedData });
        res.status(201).json(newLang);
    }
    catch (error) {
        next(error);
    }
});
exports.createLanguage = createLanguage;
const deleteLanguage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield langModel_1.LanguageModel.findOneAndDelete({ _id: req.params.id });
        res.status(200).json('language deleted');
    }
    catch (error) {
        next(error);
    }
});
exports.deleteLanguage = deleteLanguage;
