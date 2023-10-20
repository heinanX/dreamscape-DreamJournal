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
exports.deleteEntry = exports.createEntries = exports.getEntry = exports.getEntries = void 0;
const entriesModel_1 = require("./entriesModel");
const getEntries = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const entries = yield entriesModel_1.EntriesModel.find();
        res.status(200).json(entries);
    }
    catch (error) {
        next(error);
    }
});
exports.getEntries = getEntries;
const getEntry = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const entry = yield entriesModel_1.EntriesModel.findOne({ _id: req.params.id });
        res.status(200).json(entry);
    }
    catch (error) {
        next(error);
    }
});
exports.getEntry = getEntry;
const createEntries = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newEntry = yield entriesModel_1.EntriesModel.create(req.body);
        res.status(201).json(newEntry);
    }
    catch (error) {
        next(error);
    }
});
exports.createEntries = createEntries;
// export const updateEntries = async (
//   req: Request,
//   res: Response, next: NextFunction
// ) => {
//   try {
//         const newEntry = await EntriesModel.updateOne({_id: req.params.id}, updatedData);
//         res.status(201).json(newEntry);
//   } catch (error) {
//     next(error);
//   }
// };
const deleteEntry = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield entriesModel_1.EntriesModel.findOneAndDelete({ _id: req.params.id });
        res.status(204).json('entry deleted');
    }
    catch (error) {
        next(error);
    }
});
exports.deleteEntry = deleteEntry;
