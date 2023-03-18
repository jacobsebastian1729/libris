import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import MyBooksItem from './MyBooksItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export default function MyBooksList() {
  const loginUser = useSelector((state: RootState) => state.user.loginUser);
  const userBooks = loginUser?.bookShelves;

  return (
    <div>
      {loginUser === null || loginUser._id === '' || !loginUser ? (
        <div>
          <p>Please login</p>
        </div>
      ) : (
        <div>
          {userBooks?.length === 0 ? (
            <div><p>Add Books</p></div>
          ) : (
            userBooks?.map((book) => <MyBooksItem book={book}></MyBooksItem>)
          )}
        </div>
      )}
    </div>
  );
}
