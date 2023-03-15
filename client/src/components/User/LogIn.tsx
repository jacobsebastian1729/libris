import React from 'react';
import { Link } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
// MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@material-ui/core';
import ForwardIcon from '@mui/icons-material/Forward';
// module
import './LogIn.css';

export default function LogIn() {
  return (
    <div className='login-div'>
      <Card sx={{ width: 500, textAlign: 'center' }}>
        <CardHeader
          title='Welcome to <LibraryName>'
          sx={{ borderBottom: '1px solid black' }}
        />
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '2rem',
          }}
        >
          <Typography>Log In or Register</Typography>

          <div className='login-form'>
            <TextField
              sx={{ width: '70%' }}
              id='outlined-basic'
              label='E-mail'
              type='text'
              variant='standard'
            />
            <TextField
              sx={{ width: '70%' }}
              id='outlined-basic'
              label='Password'
              type='password'
              variant='standard'
            />
          </div>
          <Button
            style={{
              maxWidth: 300,
              maxHeight: 50,
              minWidth: 250,
              minHeight: 50,
            }}
          >
            LOG IN
          </Button>
          
          <div
            style={{
              marginTop: '1rem',
              width: '50%',
              borderTop: '1px solid black',
            }}
          >
            <br />
            <Typography>If you don't have an account.</Typography>
          </div>
          <Link to='/register' style={{ textDecoration: 'none' }}>
            <Button
              style={{
                maxWidth: 300,
                maxHeight: 50,
                minWidth: 250,
                minHeight: 50,
                marginTop: '1rem',
              }}
            >
              <ForwardIcon />
              Register
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
