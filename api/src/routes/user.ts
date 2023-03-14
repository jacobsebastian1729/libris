import { Router } from 'express';
import passport from 'passport';

import {
  createUserController,
  getUserByUserIdController,
  getUserListController,
} from '../controllers/user';

const router = Router();

router.post('/', createUserController);
router.get('/', getUserListController);
router.get('/:userId', getUserByUserIdController);

export default router;
