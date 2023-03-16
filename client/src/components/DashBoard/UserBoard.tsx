import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../../redux/store';
import { getAllUserData } from '../../redux/thunk/user';

export default function UserBoard() {
  const allUsers = useSelector((state: RootState) => state.user.users);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getAllUserData());
  }, []);

  return <div>UserBoard</div>;
}
