import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { AppDispatch, RootState } from '../../redux/store';
import { fetchBookDetail } from '../../redux/thunk/bookDetails';
import { Typography } from '@mui/material';

type Prop = {
  book: string;
};

function MyBooksItem({ book }: Prop) {
  const dispatch = useDispatch<AppDispatch>();
  const myBook = useSelector((state: RootState) => state.bookItem.bookDetails);

  useEffect(() => {
    dispatch(fetchBookDetail(book))
    
  }, []);
  console.log(book)
  return (
    <div className='mybook-item'>
      <Link to={`/books/${myBook._id}`}>
      <img src={myBook.thumbnail} alt={myBook.title} />
      </Link>
      <Typography variant='body2'>{myBook.author}</Typography>
      <Typography sx={{fontWeight:'bold'}}>{myBook.title}</Typography>
    </div>
  );
}

export default MyBooksItem;
