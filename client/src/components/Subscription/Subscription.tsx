import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

export default function Subscription() {
  return (
    <div>
      <div style={{ padding: '4rem' }}>
        <Typography variant='h3'>
          Get access to make your bookshelf and connect with others.
        </Typography>
      </div>
      <div className='dashboard'>
        <Card
          sx={{ width: 350, maxWidth: 340, marginRight: '3rem', height: '50%' }}
          className='user-board'
        >
          <CardMedia
            sx={{ height: 140 }}
            image='/static/images/cards/contemplative-reptile.jpg'
            title='green iguana'
          />
          <CardContent>
            <Typography gutterBottom variant='h4' component='div'>
              Basic Plan
            </Typography>
            <Typography variant='body2' color='text.secondary'>
            ✔️  You can see the books list in database.
            </Typography>
            <Typography variant='body2' color='text.secondary'>
            ✔️   You can see other user's bookshelves.
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>
        <Card sx={{ width: 350, maxWidth: 340, height: '50%' }}>
          <CardMedia
            sx={{ height: 140 }}
            image='/static/images/cards/contemplative-reptile.jpg'
            title='green iguana'
          />
          <CardContent>
            <Typography gutterBottom variant='h4' component='div'>
              Access Plan
            </Typography>
            <Typography variant='body2' color='text.secondary'>
            ✔️  You can see the books list in database.
            </Typography>
            <Typography variant='body2' color='text.secondary'>
            ✔️  You can see other user's bookshelves.
            </Typography>
            <Typography variant='body2' color='text.secondary'>
            ✔️  You can add books to your bookshelf.
            </Typography>
            <Typography variant='body2' color='text.secondary'>
            ✔️  You can follow other user's bookshelves.
            </Typography>
            <Typography variant='body2' color='text.secondary'>
            ✔️  Other users will follow you.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small'>Subscribe</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
