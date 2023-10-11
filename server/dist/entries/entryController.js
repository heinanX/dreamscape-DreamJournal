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
exports.createEntry = void 0;
const entryModel_1 = require("./entryModel");
const createEntry = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const checkCat = yield entryModel_1.EntryModel.findOne(req.body);
        /* if (!checkCat) {
            const newCategory = await CatModel.create(req.body);
            res.status(201).json(newCategory);
        } else {
            res.status(404).json(req.body.category + ' already taken');
        } */
    }
    catch (error) {
        res.status(404).json(error);
    }
});
exports.createEntry = createEntry;
