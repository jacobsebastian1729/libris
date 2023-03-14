import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

import User from '../models/User';
import UserServices from '../services/user';
import { generateToken } from '../util/generateToken';

export const createUserController = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    res.status(500).json({ error, message: 'Server error' });
  }
};

export const getUserListController = async (req: Request, res: Response) => {
  try {
  } catch (error) {}
};
