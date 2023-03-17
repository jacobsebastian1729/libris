import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TableContainer from '@mui/material/TableContainer';
import TableBody from '@mui/material/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@mui/material/Button';
import { TableCell } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Table from '@mui/material/Table';
import Rating from '@mui/material/Rating';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { red } from '@mui/material/colors';

import { AppDispatch, RootState } from '../../redux/store';
import { getAllUserData } from '../../redux/thunk/user';
import { fetchbookData } from '../../redux/thunk/book';
import BookForm from '../BookForm/BookForm';

function createData(
  Id: string,
  Title: string,
  Author: string,
  Rating: number
  //   Status: string,
  //   Role: string,
  //   Books: [],
  //   Following: [],
  //   Followers: [],
  //   Comments: []
) {
  return {
    Id,
    Title,
    Author,
    Rating,
  };
}

const rows = [];

export default function BooksBoard() {
  const [open, setOpen] = React.useState(false)
  const allBooks = useSelector((state: RootState) => state.bookItem.Book);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchbookData());
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <Typography variant='h2'>Books Management</Typography>
        <div
          style={{
            display: 'flex',
            justifyContent: 'right',
            paddingRight: '1rem',
            marginBottom: '1rem',
          }}
        >
          <Button color='inherit' onClick={handleClickOpen}>
          <LibraryAddIcon />
          <Typography>Add More Books</Typography>
          </Button>
          <BookForm open={open} handleClose={handleClose}/>
        </div>
      </div>
      <TableContainer
        component={Paper}
        sx={{ marginLeft: '.5rem', paddingRight: '.5rem' }}
      >
        <Table aria-label='simple table' stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align='left'>Title</TableCell>
              <TableCell align='left'>Author</TableCell>
              <TableCell align='center'>Rating</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allBooks.map((row) => (
              <TableRow key={row._id}>
                <TableCell component='th' scope='row'>
                  {row._id}
                </TableCell>
                <TableCell align='left'>{row.title}</TableCell>
                <TableCell align='left'>{row.author}</TableCell>
                <TableCell align='center'>
                  <Rating name='read-only' value={row.rating} readOnly />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
