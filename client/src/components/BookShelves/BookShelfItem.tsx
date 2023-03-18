import React from 'react'
import { Link } from 'react-router-dom'

import './BookShelf.css'

import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';

import { BookShelf } from '../../types/type'
import BookShelfItemComponent from './BookShelfItemComponent';

import './BookShelf.css'

type OneBookShelfs = {
  prop: BookShelf
} 

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BookShelfItem({prop}: OneBookShelfs) {


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Box className="shelf_outer"  sx={{ flexGrow: 1, paddingLeft: 2, marginTop: -2 }}>
        <Link
        to=''
        onClick={handleOpen}
        >
      <Typography className="shelf_outer_content" variant="body1" sx={{ fontWeight: 700, display: 'inline-block' }} mt={2} ml={12.7} p = {.7}>
              {prop.userId.email}
        </Typography>
        </Link>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            You wish to follow {prop.userId.email}
          </Typography>
          <Button variant="outlined">Yes</Button>
          <Button variant="outlined" onClick={handleClose}>No</Button>
          
        </Box>
      </Modal>
        <Box display = 'flex' 
        justifyContent='center' 
        mt = {0}
        >
        <Box className="horizontal-section">
            {
              prop.books.map((book) => {
                
                  return <BookShelfItemComponent key={book._id} prop = {book}/>
              })
            }
                
    
  </Box>
  </Box>
      </Box>
    </div>
  )
}
