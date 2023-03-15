import { Router } from 'express';
import passport from 'passport';

import {
  createUserController,
  getUserByUserIdController,
  getUserListController,
  googleAuthenticate,
  logInWithPassword,
} from '../controllers/user';

const router = Router();

router.post('/', createUserController);
router.get('/', getUserListController);
router.get('/:userId', getUserByUserIdController);
router.post('/login', logInWithPassword);
router.post(
  '/google-login',
  passport.authenticate('google-id-token', { session: false }),
  googleAuthenticate
);

export default router;
