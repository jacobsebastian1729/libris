import User, { UserDocument } from '../models/User';

const createUser = async (user: UserDocument): Promise<UserDocument> => {
  return user.save();
};

const findUserById = async (id: string): Promise<UserDocument | null> => {
  return User.findById(id);
};

const getUserList = async (): Promise<UserDocument[]> => {
  return User.find();
};

export default {
  createUser,
  findUserById,
  getUserList,
};
