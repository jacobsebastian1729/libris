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

// for login
const findUserByEmail = async (
  userEmail: string
): Promise<UserDocument | null> => {
  return User.findOne({ email: userEmail });
};

export default {
  createUser,
  findUserById,
  getUserList,
  findUserByEmail
};
