import { NextFunction, Request, Response } from "express";
import { UserModel } from "./userModel";
import bcrypt from "bcrypt";

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json(error);
  }
};

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username, password, mail } = req.body;

    const existingMail = await UserModel.findOne({ mail: mail });
    const existingUsername = await UserModel.findOne({ username: username });
    
    if (existingMail) {
      return res.status(409).json("Email already registred");
    } else if (existingUsername) {
      return res.status(409).json("Username already taken");
    } else {
      const user = new UserModel(req.body);
      user.password = await bcrypt.hash(password, 15);
      await user.save();

      const jsonUser = user.toJSON();
      delete jsonUser.password;

      res.status(201).json(jsonUser);
    }
  } catch (error) {
    res.status(200).json(error);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const existingUser = await UserModel.findOne({
      username: req.body.username,
    }).select("+password");

    if (
      !existingUser ||
      !(await bcrypt.compare(req.body.password, existingUser.password))
    ) {
      return res.status(401).json("Wrong password");
    }

    // Check if user already is logged in
    //   if (req.session._id) {
    //     return res.status(200).json(user);
    //   }

    const user = existingUser.toJSON();
    delete user.password;

    res.status(200).json(user);
  } catch (error) {
    res.status(200).json(error);
  }
};

export const logout = async (req: Request, res: Response) => {
  try {
    res.status(200).json({ message: "you have been logged out" });
  } catch (error) {
    res.status(200).json(error);
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    await UserModel.findByIdAndDelete({ _id: req.params.id })
    res.status(200).json({ message: "deleted" });
  } catch (error) {
    res.status(200).json(error);
  }
};


