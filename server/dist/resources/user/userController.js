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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.logout = exports.login = exports.createUser = exports.getUsers = void 0;
const userModel_1 = require("./userModel");
const bcrypt_1 = __importDefault(require("bcrypt"));
const getUsers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userModel_1.UserModel.find();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(404).json(error);
    }
});
exports.getUsers = getUsers;
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password, mail } = req.body;
        const existingMail = yield userModel_1.UserModel.findOne({ mail: mail });
        const existingUsername = yield userModel_1.UserModel.findOne({ username: username });
        if (existingMail) {
            return res.status(409).json("Email already registred");
        }
        else if (existingUsername) {
            return res.status(409).json("Username already taken");
        }
        else {
            const user = new userModel_1.UserModel(req.body);
            user.password = yield bcrypt_1.default.hash(password, 15);
            yield user.save();
            const jsonUser = user.toJSON();
            delete jsonUser.password;
            res.status(201).json(jsonUser);
        }
    }
    catch (error) {
        res.status(200).json(error);
    }
});
exports.createUser = createUser;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existingUser = yield userModel_1.UserModel.findOne({
            username: req.body.username,
        }).select("+password");
        if (!existingUser ||
            !(yield bcrypt_1.default.compare(req.body.password, existingUser.password))) {
            return res.status(401).json("Wrong password");
        }
        // Check if user already is logged in
        //   if (req.session._id) {
        //     return res.status(200).json(user);
        //   }
        const user = existingUser.toJSON();
        delete user.password;
        res.status(200).json(user);
    }
    catch (error) {
        res.status(200).json(error);
    }
});
exports.login = login;
const logout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).json({ message: "you have been logged out" });
    }
    catch (error) {
        res.status(200).json(error);
    }
});
exports.logout = logout;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield userModel_1.UserModel.findByIdAndDelete({ _id: req.params.id });
        res.status(200).json({ message: "deleted" });
    }
    catch (error) {
        res.status(200).json(error);
    }
});
exports.deleteUser = deleteUser;
