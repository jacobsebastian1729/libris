import axios from 'axios';

import { AppDispatch } from '../store';
import { userActions } from '../slices/user';
import { UserType } from '../../types/usertype';

const url = 'http://localhost:8000/user';

export function registerUser(user: UserType) {
  return async (dispatch: AppDispatch) => {
    await axios
      .post(url, user)
      .then((res) => {
        if (res.status === 200) {
          console.log(res, 'from register thunk')
          dispatch(userActions.setMessage('Register Success. Please log in.'));
        } else {
          dispatch(userActions.setMessage('Register failed.'));
        }
      })
      .catch((err) => dispatch(userActions.setMessage('Server error')));
  };
}
