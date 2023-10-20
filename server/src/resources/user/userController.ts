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
    next(error);
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
      return res.status(409).json('Email already in registered');
    } else if (existingUsername) {
      return res.status(409).json('Username already in use');
    } else {
      const user = new UserModel(req.body);
      user.password = await bcrypt.hash(password, 15);
      await user.save();

      const jsonUser = user.toJSON();
      delete jsonUser.password;

      //add cookie session data here later,,,, maybe

      res.status(201).json(jsonUser);
    }
  } catch (error) {
    next(error);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const existingUser = await UserModel.findOne({
      username: req.body.username,
    }).select("+password");

    if (
      !existingUser ||
      !(await bcrypt.compare(req.body.password, existingUser.password))
    ) {
      return res.status(401).json( 'wrong username or password' );
    }

    if (req.session?._id) {
      return res.status(200).json( 'user already logged in' );
    }

    const user = existingUser.toJSON();
    delete user.password;
    req.session = user;

    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const logout = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    req.session = null;
    res.status(200).json( 'user is logged out' );
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await UserModel.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json( ' user deleted' );
  } catch (error) {
    next(error);
  }
};
