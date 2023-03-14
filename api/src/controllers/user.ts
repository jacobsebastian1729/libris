import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

import User from '../models/User';
import UserServices from '../services/user';
import { generateToken } from '../util/generateToken';

export const createUserController = async (req: Request, res: Response) => {
  try {
    const { fullName, email, password } = req.body;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: 'This email already exists.' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      _id: new mongoose.Types.ObjectId(),
      fullName: fullName,
      email: email,
      password: hashedPassword,
    });

    const user = await UserServices.createUser(newUser);

    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      isAdmin: user.isAdmin,
      status: user.status,
    });
  } catch (error) {
    res.status(500).json({ error, message: 'Server error' });
  }
};

export const getUserListController = async (req: Request, res: Response) => {
  try {
    const userList = await UserServices.getUserList();
    res.status(200).json(userList);
  } catch (error) {
    res.status(404).json({ message: 'Cannot be found' });
  }
};

export const getUserByUserIdController = async (
  req: Request,
  res: Response
) => {
  try {
    const userId = req.params.userId;
    const user = await UserServices.findUserById(userId);
    if (!user) {
      return res.status(404).json({ message: 'This user does not exist.' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const logInWithPassword = async (req: Request, res: Response) => {
  try {
    const userData = await UserServices.findUserByEmail(req.body.email);
    // email not matching
    if (!userData) {
      res.status(400).json({
        message: 'Please register first.',
      });
      return;
    }
    const plainPassword = req.body.password;
    const databasePassword = userData.password;

    const match = await bcrypt.compare(plainPassword, databasePassword);

    // password not matching
    if (!match) {
      res.status(400).json({ message: 'Please check the password again.' });
      return;
    }

    // all good -> token
    const token = generateToken(userData.email)

    res.status(200).json({
        userData, token, message: 'Login Success.'
    })
  } catch (err) {
    res.status(500).json({ message: 'Sorry. Login failed.' });
  }
};
