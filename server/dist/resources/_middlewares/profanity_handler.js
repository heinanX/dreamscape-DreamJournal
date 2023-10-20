"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfanityCheck = void 0;
// PROFANITY HANDLER FOR ENGLISH LANGUAGE
const bad_words_1 = __importDefault(require("bad-words"));
const ProfanityCheck = (req, res, next) => {
    const filter = new bad_words_1.default();
    function filterBadWords() {
        // Filters the text using the bad-words library
        return filter.clean(req.body.body);
    }
    req.body.body = filterBadWords();
    next();
};
exports.ProfanityCheck = ProfanityCheck;
