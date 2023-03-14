import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    color: 'black',
  },
  navButton: {
    margin: theme.spacing(0, 1),
    color: 'black',
  },
  rightNavButton: {
    margin: theme.spacing(0, 1),
    color: 'black',
  },
  appBar: {
    backgroundColor: 'white',
  },
  darkThemeIcon: {
    color: 'black',
    cursor: 'pointer',
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.appBar}>
        <Toolbar>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <Typography variant='h6' className={classes.title}>
              Logo here
            </Typography>
          </Link>
          <Link to='/search' style={{ textDecoration: 'none' }}>
            <Button color='inherit' className={classes.navButton}>
              Search
            </Button>
          </Link>
          <Link to='/books' style={{ textDecoration: 'none' }}>
            <Button color='inherit' className={classes.navButton}>
              Books
            </Button>
          </Link>
          <Link to={`/:userId/books`} style={{ textDecoration: 'none' }}>
            <Button color='inherit' className={classes.navButton}>
              MyBooks
            </Button>
          </Link>
          <Link to='/bookshelves/all' style={{ textDecoration: 'none' }}>
            <Button color='inherit' className={classes.navButton}>
              BookShelves
            </Button>
          </Link>
          <div style={{ flexGrow: 1 }}></div>
          {}
          <Link to='/login' style={{ textDecoration: 'none' }}>
            <Button color='inherit' className={classes.rightNavButton}>
              Login
            </Button>
          </Link>
          {/* <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Subscription</MenuItem>
            <MenuItem onClick={handleMenuClose}>My Achievement</MenuItem>
            <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          </Menu> */}

          <Brightness4Icon className={classes.darkThemeIcon} />
        </Toolbar>
      </AppBar>
    </div>
  );
}
