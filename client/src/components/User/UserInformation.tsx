import React from 'react';
import { useSelector } from 'react-redux';

import { Avatar, Button, Typography } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

import { RootState } from '../../redux/store';
import './UserInformation.css';

export default function UserInformation() {
  const user = useSelector((state: RootState) => state.user.loginUser);
  console.log(user);
  return (
    <div className='user-information'>
      <div className='profile'>
        <h2>{user?.fullName}</h2>
       
        <div style={{ display: 'flex' }}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          {user?.profile_img ? (
            <Avatar
              alt={user?.fullName}
              src={user?.profile_img}
              sx={{ width: 150, height: 150 }}
            />
          ) : (
            <Avatar
              alt={user?.fullName}
              sx={{
                width: 150,
                height: 150,
                fontSize: '5rem',
                bgcolor: deepPurple[500],
                marginLeft: '3rem',
                marginTop: '1rem',
                marginBottom: '1rem',
                zIndex: '1',
                border: '3px solid white',
              }}
            >
              {user?.fullName.charAt(0).toUpperCase()}
            </Avatar>
          )}
        
      <Button>Edit profile</Button>
      </div>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              paddingLeft: '5rem',
              '& > :not(style)': {
                m: 1,
                width: 128,
                height: 128,
              },
            }}
          >
            <Paper elevation={8} sx={{ paddingTop: '2rem' }}>
              <Typography variant='h3'>{user?.bookShelves.length}</Typography>
              <Typography variant='h6'>Books</Typography>
            </Paper>
            <Paper elevation={8} sx={{ paddingTop: '2rem' }}>
              <Typography variant='h3'>{user?.followers.length}</Typography>
              <Typography variant='h6'>Followers</Typography>
            </Paper>
            <Paper elevation={8} sx={{ paddingTop: '2rem' }}>
              <Typography variant='h3'>{user?.following.length}</Typography>
              <Typography variant='h6'>Following</Typography>
            </Paper>
          </Box>
        </div>
      </div>
     
      <div className='about-div'>
        <h2>ABOUT</h2>
        <div className='about'>
          {user?.about_me ? (
            <Typography>{user.about_me}</Typography>
          ) : (
            <div>
              <Typography variant='subtitle2'>
                Write about yourself and your interests of books. You will be
                noted!
              </Typography>
              <Button>Write About Me</Button>
            </div>
          )}
        </div>
      </div>
      
    </div>
  );
}
