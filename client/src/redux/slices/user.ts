//  product slice here
import { createSlice } from '@reduxjs/toolkit';

import { UserType, UserDataType } from '../../types/usertype';

type InitialState = {
  user: UserType;
  users: UserDataType[];
  loginSuccess: boolean;
  serverMessage: string;
  loginUser: UserDataType;
};

const initialState: InitialState = {
  user: {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  },
  users: [],
  loginSuccess: false,
  serverMessage: '',
  loginUser: {
    _id: '',
    fullName: '',
    email: '',
    isAdmin: false,
    status: 'inactive',
    followers: [''],
    following: [''],
    bookShelves: [''],
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginAction: (state, action) => {
      state.loginUser = action.payload;
    },
    setMessage: (state, action) => {
      state.serverMessage = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
