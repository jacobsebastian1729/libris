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

import { AppDispatch, RootState } from '../../redux/store';
import { getAllUserData } from '../../redux/thunk/user';
import { Typography } from '@mui/material';
import { red } from '@mui/material/colors';

function createData(
  Id: string,
  Name: string,
  Email: string,
  Status: string,
  Role: string,
  Books: [],
  Following: [],
  Followers: [],
  Comments: []
) {
  return {
    Id,
    Name,
    Email,
    Status,
    Role,
    Books,
    Following,
    Followers,
    Comments,
  };
}

const rows = [];

export default function UserBoard() {
  const allUsers = useSelector((state: RootState) => state.user.users);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getAllUserData());
  }, []);

  return (
    <div>
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <Typography variant='h2'>User Management</Typography>
      </div>
      <TableContainer component={Paper} sx={{ marginLeft: '.5rem' }}>
        <Table aria-label='simple table' stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align='right'>Name</TableCell>
              <TableCell align='right'>Email</TableCell>
              <TableCell align='right'>Status</TableCell>
              <TableCell align='right'>Role</TableCell>
              <TableCell align='right'>Books</TableCell>
              <TableCell align='right'>Following</TableCell>
              <TableCell align='right'>Followers</TableCell>
              <TableCell align='right'>Comments</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allUsers.map((row) => (
              <TableRow key={row._id}>
                <TableCell component='th' scope='row'>
                  {row._id}
                </TableCell>
                <TableCell align='right'>{row.fullName}</TableCell>
                <TableCell align='right'>{row.email}</TableCell>
                <TableCell align='right'>
                  {row.status === 'inactive' ? (
                    <Button variant="outlined" color="secondary" sx={{ borderRadius: 12.5 }} >{row.status}</Button>
                  ) : row.status === 'active' ? (
                    <Button variant="outlined" color="success" sx={{ borderRadius: 12.5 }}>{row.status}</Button>
                  ) : (
                    <Button variant="outlined" color="error" sx={{ borderRadius: 12.5 }}>{row.status}</Button>
                  )}
                </TableCell>
                <TableCell align='right'>
                  {row.isAdmin ? <Typography color={red[800]}>Admin</Typography> : <Typography>User</Typography>}
                </TableCell>
                <TableCell align='right'>
                  {row.bookShelves.length} books
                </TableCell>
                <TableCell align='right'>
                  {row.following.length} users
                </TableCell>
                <TableCell align='right'>
                  {row.followers.length} users
                </TableCell>
                {/* <TableCell align="right">{row.comments}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
