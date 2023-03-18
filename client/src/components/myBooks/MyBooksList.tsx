import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { ImageList, ListItemIcon, ListItemText } from '@mui/material';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

import MyBooksItem from './MyBooksItem';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { Button, Typography } from '@mui/material';
import './MyBooksList.css';
import { fetchBookshelfByUserIdThunk } from '../../redux/thunk/bookShelf';

export default function MyBooksList() {
  const loginUser = useSelector((state: RootState) => state.user.loginUser);
  const userBooks = loginUser?.bookShelves;

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchBookshelfByUserIdThunk(loginUser?._id as string));
  }, []);

  return (
    <div className='mybooks'>
      {loginUser === null || loginUser._id === '' || !loginUser ? (
        <div>
          <p>Please login</p>
        </div>
      ) : (
        <div>
          {userBooks?.length === 0 ? (
            <div>
              <p>Add Books</p>
            </div>
          ) : (
            <div>
              <div className='mybook-upper'>
                <Typography variant='h4'>
                  Here you'll fine a list of the books you've started reading.
                </Typography>
                <div className='mybook-btns'>
                  <Link
                    to='/books'
                    style={{ textDecoration: 'none', marginRight: '2rem' }}
                  >
                    <Button variant='outlined' color='secondary'>
                      Add more books
                    </Button>
                  </Link>
                  <Link
                    to={`/${loginUser._id}/setting`}
                    style={{ textDecoration: 'none' }}
                  >
                    <Button variant='outlined' color='secondary'>
                      My Profile
                    </Button>
                  </Link>
                </div>
              </div>
              <div className='mybook-bottom'>
                <div>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <BookmarkBorderIcon />
                      </ListItemIcon>
                      <ListItemText primary='Started 0' />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <SportsScoreIcon />
                      </ListItemIcon>
                      <ListItemText primary='Finished 0' />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <LibraryBooksIcon />
                      </ListItemIcon>
                      <ListItemText primary={`All ${userBooks?.length}`} />
                    </ListItem>
                  </List>
                </div>
                <div className='mybook-list'>
                  {/* {userBooks?.map((book) => (
                    <div className='mybook-item'>
                    <Link to={`/books/${book._id}`}>
                    <img src={book.thumbnail} alt={book.title} />
                    </Link>
                    <Typography variant='body2'>{book.author}</Typography>
                    <Typography sx={{fontWeight:'bold'}}>{book.title}</Typography>
                  </div>
                  ))}
             */}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
