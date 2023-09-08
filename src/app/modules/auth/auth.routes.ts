import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AuthValidation } from './auth.validation';
import { AuthController } from './auth.controller';
const router = express.Router();

router.post(
  '/signup',
  validateRequest(AuthValidation.signupZodValidation),
  AuthController.signup
);

router.post(
  '/signin',
  validateRequest(AuthValidation.signinZodValidation),
  AuthController.signin
);

export const AuthRoutes = router;
