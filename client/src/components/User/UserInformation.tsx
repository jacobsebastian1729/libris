import React from 'react';
import { useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { Avatar, Button, Typography } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';

import { RootState } from '../../redux/store';
import './UserInformation.css';
import { UserDataType } from '../../types/type';

const EditSchema = Yup.object().shape({
  fullName: Yup.string(),
  email: Yup.string().email('Invalid email'),
  about: Yup.string(),
  image: Yup.string(),
});

export default function UserInformation() {
  const [open, setOpen] = React.useState(false);
  const user = useSelector((state: RootState) => state.user.loginUser);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const editHandler = (newInfo: Partial<UserDataType>) => {};

  return (
    <div className='user-information'>
      <div className='profile'>
        <h2>{user?.fullName}</h2>

        <div style={{ display: 'flex' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
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

            <Button onClick={handleClickOpen}>Edit profile</Button>
            <Dialog
              fullWidth={true}
              maxWidth='xl'
              open={open}
              onClose={handleClose}
            >
              <DialogTitle>Profile</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  You can edit your information here.
                  <Formik
                    initialValues={{
                      fullName: '',
                      email: '',
                      about: '',
                      image: '',
                    }}
                    validationSchema={EditSchema}
                    onSubmit={(values) => {
                      editHandler(values);
                    }}
                  >
                    {({ errors, touched, handleChange }) => (
                      <Form>
                        <Grid container spacing={3}>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              required
                              id='fullName'
                              name='fulllName'
                              label='Full name'
                              fullWidth
                              autoComplete='given-name'
                              variant='standard'
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <TextField
                              required
                              id='email'
                              name='email'
                              label='E-mail'
                              fullWidth
                              variant='standard'
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <TextField
                              required
                              id='about'
                              name='about'
                              label='About Me'
                              fullWidth
                              autoComplete='about me'
                              variant='standard'
                            />

                            <Grid item xs={12} sm={6}>
                              <TextField
                                required
                                id='image'
                                name='image'
                                label='Profile Image URL'
                                fullWidth
                                variant='standard'
                              />
                            </Grid>
                          </Grid>
                        </Grid>
                      </Form>
                    )}
                  </Formik>
                </DialogContentText>
                <Box
                  noValidate
                  component='form'
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    m: 'auto',
                    width: 'fit-content',
                  }}
                >
                  <FormControl sx={{ mt: 2, minWidth: 120 }}>
                    <InputLabel htmlFor='max-width'>maxWidth</InputLabel>
                  </FormControl>
                </Box>
              </DialogContent>
              <DialogActions>
                <Button color='secondary' onClick={handleClose}>
                  Change Password
                </Button>
                <Button onClick={handleClose}>Cancle</Button>
                <Button
                  onClick={() => {
                    handleClose();
                  }}
                >
                  Save
                </Button>
              </DialogActions>
            </Dialog>
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
