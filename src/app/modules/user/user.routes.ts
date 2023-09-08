import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import authGuard from '../../middlewares/authGuard';
import validateRequest from '../../middlewares/validateRequest';
import { UserController } from './user.controller';
import { UserValidation } from './user.validations';

const router = express.Router();

router.get('/', authGuard(ENUM_USER_ROLE.ADMIN), UserController.getAllUsers);

router.get(
  '/:id',
  authGuard(ENUM_USER_ROLE.ADMIN),
  UserController.getSingleUser
);

router.put(
  '/:id',
  authGuard(ENUM_USER_ROLE.ADMIN),
  validateRequest(UserValidation.update),
  UserController.updateUser
);
router.delete(
  '/:id',
  authGuard(ENUM_USER_ROLE.ADMIN),
  UserController.deleteUser
);

export const UserRoutes = router;
