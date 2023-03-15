import React from 'react';
import { Link } from 'react-router-dom';
// MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@material-ui/core';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox' } };

export default function Register() {
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
         
     
          <Typography>Register</Typography>

          <div className='login-form'>
            <TextField
              sx={{ width: '60%' }}
              id='outlined-basic'
              label='Full Name'
              type='text'
              variant='standard'
            />
            <TextField
              sx={{ width: '60%' }}
              id='outlined-basic'
              label='E-mail'
              type='text'
              variant='standard'
            />
            <TextField
              sx={{ width: '60%' }}
              id='outlined-basic'
              label='Password'
              type='password'
              variant='standard'
            />
             <TextField
              sx={{ width: '60%' }}
              id='outlined-basic'
              label='Confirm Password'
              type='password'
              variant='standard'
            />
            
          </div>
          <div style={{display: 'flex', alignItems: 'center'}}>
          <Checkbox {...label} />
            <Typography>I agree to the Terms of Service</Typography>
          </div>
          <Button
            style={{
              maxWidth: 300,
              maxHeight: 50,
              minWidth: 250,
              minHeight: 50,
            }}
          >
            Register
          </Button>
          <div
            style={{
              marginTop: '1rem',
              width: '50%',
              borderTop: '1px solid black',
            }}
          >
            <br />
            <Typography>Do you have an account?</Typography>
          </div>
          <Link to='/login' style={{ textDecoration: 'none' }}>
            <Button
              style={{
                maxWidth: 300,
                maxHeight: 50,
                minWidth: 250,
                minHeight: 50,
                marginTop: '1rem',
              }}
            >
                <ArrowBackIosIcon />
              Back To Log In
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
