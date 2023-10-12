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
exports.getLanguages = exports.createLanguage = void 0;
const langModel_1 = require("./langModel");
const createLanguage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { language } = req.body;
        const formattedData = language.charAt(0).toUpperCase() + language.slice(1).toLowerCase();
        const newLang = yield langModel_1.LanguageModel.create({ language: formattedData });
        res.status(201).json(newLang);
    }
    catch (error) {
        res.status(404).json(error);
    }
});
exports.createLanguage = createLanguage;
const getLanguages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const langs = yield langModel_1.LanguageModel.find();
        res.status(201).json(langs);
    }
    catch (error) {
        res.status(404).json(error);
    }
});
exports.getLanguages = getLanguages;
