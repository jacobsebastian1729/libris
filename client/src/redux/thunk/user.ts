import axios from 'axios';

import { AppDispatch } from '../store';
import { userActions } from '../slices/user';
import { LoginUserType, UserDataType, UserType } from '../../types/type';
import { PORT } from '../../port/Port';

const url = `http://localhost:${PORT}/user`;

export function registerUser(user: UserType) {
  return async (dispatch: AppDispatch) => {
    await axios
      .post(url, user)
      .then((res) => {
        if (res.status === 200) {
          console.log(res, 'from register thunk');
          dispatch(userActions.setMessage('Register Success. Please log in.'));
        } else {
          dispatch(userActions.setMessage('Register failed.'));
        }
      })
      .catch((err) => dispatch(userActions.setMessage('Server error')));
  };
}

export function loginUserThunk(user: LoginUserType) {
  return async (dispatch: AppDispatch) => {
    await axios
      .post(`${url}/login`, user)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          const token = res.data.token;
          localStorage.setItem('userToken', token);
          dispatch(userActions.loginAction(true))
          dispatch(userActions.getLoginUser(res.data.userData))
          dispatch(userActions.setMessage(res.data.message))
        }
        if (res.status === 400) {
          dispatch(userActions.loginAction(false))
          dispatch(userActions.getLoginUser(null))
          dispatch(userActions.setMessage(res.data.message))
        }
      })
      .catch((err) => dispatch(userActions.setMessage('Server error')));
  };
}

export function getAllUserData() {
  return async (dispatch: AppDispatch) => {
    const response = await axios.get(`${url}`)
    const userData = await response.data
    dispatch(userActions.getAllUsers(userData))
  }
}

export function getUserByLogInUserId(id:string) {
  return async (dispatch: AppDispatch) => {
    const response = await axios.get(`${url}/${id}`)
    console.log(response)
    // dispatch(userActions.getLoginUser(response.data))
  }
}
