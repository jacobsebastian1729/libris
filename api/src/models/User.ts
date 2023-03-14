import mongoose, { Document } from 'mongoose';

export type UserDocument = Document & {
  _id: string;
  fullName: string;
  email: string;
  password: string;
  profile_img: string;
  about_me: string;
  followers: string[];
  following: string[];
  isAdmin: boolean;
  status: string;
  // comments: CommentsDocument[];
  // bookShelves: BookDocument[];
};

const Schema = mongoose.Schema;
const UserSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
  },
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profile_img: {
    type: String,
  },
  about_me: {
    type: String,
  },
  followers: [{ 
    type: Schema.Types.ObjectId, 
    ref: 'User' }],
  following: [{ 
    type: Schema.Types.ObjectId, 
    ref: 'User' }],
  isAdmin: {
    type: Boolean,
    default: false,
  },
  status: {
    type: String,
    enum: ['active', 'inactive', 'banned'],
    default: 'inactive',
  },
  //   comments: {},
  //   bookShelves: {}
});

export default mongoose.model<UserDocument>('User', UserSchema);
