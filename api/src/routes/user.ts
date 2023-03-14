import { Router } from 'express';
import passport from 'passport';

import {
  createUserController,
  getUserListController,
} from '../controllers/user';

const router = Router();

router.post('/', createUserController);
router.get('/', getUserListController);

export default router;
