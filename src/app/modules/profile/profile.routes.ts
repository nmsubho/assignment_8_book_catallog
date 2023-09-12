import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import authGuard from '../../middlewares/authGuard';
import { ProfileController } from './profile.controller';

const router = express.Router();

router.get(
  '/',
  authGuard(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.CUSTOMER),
  ProfileController.getMyProfile
);

export const ProfileRoutes = router;
