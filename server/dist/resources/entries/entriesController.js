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
exports.createEntries = void 0;
const entriesModel_1 = require("./entriesModel");
const createEntries = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newEntry = yield entriesModel_1.EntriesModel.create(req.body);
        res.status(201).json(newEntry);
    }
    catch (error) {
        res.status(404).json(error);
    }
});
exports.createEntries = createEntries;
