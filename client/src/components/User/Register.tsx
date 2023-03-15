import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
// MUI
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@material-ui/core';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Checkbox from '@mui/material/Checkbox';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// module
import { UserType } from '../../types/usertype';
import { AppDispatch } from '../../redux/store';
import { registerUser } from '../../redux/thunk/user';

const label = { inputProps: { 'aria-label': 'Checkbox' } };

const RegisterSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(1, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Please enter your full name'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/,
      'Password should contain uppercase letter, lowercase letter and number'
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Password does not match')
    .required('Password confirmation is required'),
  termsAndConditions: Yup.bool().oneOf(
    [true],
    'You need to accept the terms and conditions'
  ),
});

export default function Register() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate()
  const registerHandler = (user: UserType) => {
    if (!user) {
      navigate('/register')
      return;
    }
    if (user) {
      dispatch(registerUser(user));
      navigate('/')
    }
  };
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
            <Formik
              validateOnChange={true}
              initialValues={{
                fullName: '',
                email: '',
                password: '',
                confirmPassword: '',
              }}
              validationSchema={RegisterSchema}
              onSubmit={(values) => {
                console.log(values);
                registerHandler(values);
              }}
            >
              {({ errors, touched, handleChange }) => (
                <Form className='signup'>
                  <TextField
                    sx={{ width: '60%' }}
                    id='outlined-basic'
                    label='Full Name'
                    type='text'
                    name='fullName'
                    variant='standard'
                    onChange={handleChange}
                  />
                  {errors.fullName && touched.fullName ? (
                    <p className='input-error'>*{errors.fullName}</p>
                  ) : null}
                  <TextField
                    sx={{ width: '60%' }}
                    id='outlined-basic'
                    label='E-mail'
                    type='text'
                    name='email'
                    variant='standard'
                    onChange={handleChange}
                  />
                  {errors.email && touched.email ? (
                    <p className='input-error'>*{errors.email}</p>
                  ) : null}
                  <TextField
                    sx={{ width: '60%' }}
                    id='outlined-basic'
                    label='Password'
                    type='password'
                    name='password'
                    variant='standard'
                    onChange={handleChange}
                  />
                  {errors.password && touched.password ? (
                    <p className='input-error'>*{errors.password}</p>
                  ) : null}
                  <TextField
                    sx={{ width: '60%' }}
                    id='outlined-basic'
                    label='Confirm Password'
                    type='password'
                    name='confirmPassword'
                    variant='standard'
                    onChange={handleChange}
                  />
                  {errors.confirmPassword && touched.confirmPassword ? (
                    <p className='input-error'>*{errors.confirmPassword}</p>
                  ) : null}
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Checkbox {...label} name='termsAndConditions' />
                      <Typography>I agree to the Terms of Service</Typography>
                    </div>
                    <Button
                      type='submit'
                      style={{
                        maxWidth: 300,
                        maxHeight: 50,
                        minWidth: 250,
                        minHeight: 50,
                      }}
                    >
                      Register
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>

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
