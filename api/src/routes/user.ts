import { Router } from 'express';
import passport from 'passport';

import {
  createUserController,
  getUserByUserIdController,
  getUserListController,
  logInWithPassword,
  updateUserByIdController,
} from '../controllers/user';

const router = Router();

router.post('/', createUserController);
router.get('/', getUserListController);
router.get('/:userId', getUserByUserIdController);
router.post('/login', logInWithPassword);
router.put(
  '/:userId',
  passport.authenticate('jwt', { session: false }),
  updateUserByIdController
);
// router.post(
//   '/google-login',
//   passport.authenticate('google-id-token', { session: false }),
//   googleAuthenticate
// );

export default router;
