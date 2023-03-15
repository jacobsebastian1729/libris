import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../../redux/store';
import { getAllUserData } from '../../redux/thunk/user';
import Table from './Table';

export default function DashBoard() {
  const allUsers = useSelector((state: RootState) => state.user.users);
//   const allBooks = useSelector((state: RootState) => state.)

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getAllUserData());
  }, []);

  console.log('dashboard',allUsers)
  return (<div></div>
 )
}
