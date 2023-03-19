import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Lottie from 'react-lottie';
import search from '../../asset/85474-search.json';
import study from '../../asset/107357-students.json';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { userSubscribe } from '../../redux/thunk/user';

const defaultOptions1 = {
  loop: true,
  autoplay: true,
  animationData: search,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const defaultOptions2 = {
  loop: true,
  autoplay: true,
  animationData: study,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};
type Prop = {
  mode: string;
};
export default function Subscription({ mode }: Prop) {
    const loginUser = useSelector((state:RootState)=> state.user.loginUser)
    const loginUserId = loginUser?._id as string

    const dispatch = useDispatch<AppDispatch>()
    const subscribeHandler = (userId:string) => {
        dispatch(userSubscribe(userId))
    }

  return (
    <div>
      <div style={{ padding: '3rem' }}>
        
        {loginUser?.status === 'inactive' ?<Typography variant='h3'>
          Get access to make your bookshelf and connect with others.
        </Typography>: <Typography variant='h3'>You are a subscriber.</Typography>}
        
      </div>
      <div className='dashboard'>
        <Card
          sx={{
            width: 350,
            maxWidth: 340,
            marginRight: '3rem',
            height: '55%',
            backgroundColor: mode === 'dark' ? '#4e342e' : 'white',
          }}
          className='user-board'
        >
          <Lottie options={defaultOptions1} height={200} width={250} />
          <CardContent>
            <Typography gutterBottom variant='h4' component='div'>
              Basic Plan
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              ✅ You can see the books list in database.
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              ✅ You can see other user's bookshelves.
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>
        <Card
          sx={{
            width: 350,
            maxWidth: 340,
            height: '55%',
            backgroundColor: mode === 'dark' ? '#4e342e' : 'white',
          }}
        >
          <Lottie options={defaultOptions2} height={200} width={250} />
          <CardContent>
            <Typography gutterBottom variant='h4' component='div'>
              Access Plan
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              ✅ You can see the books list in database.
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              ✅ You can see other user's bookshelves.
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              ✅ You can add books to your bookshelf.
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              ✅ You can follow other user's bookshelves.
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              ✅ Other users will follow you.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size='small' onClick={()=>subscribeHandler(loginUserId)}>Subscribe</Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
