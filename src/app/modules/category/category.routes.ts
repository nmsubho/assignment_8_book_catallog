import express from 'express';
import authGuard from '../../middlewares/authGuard';
import validateRequest from '../../middlewares/validateRequest';
import { CategoryController } from './category.controller';
import { CategoryValidation } from './category.validations';
import { ENUM_USER_ROLE } from '../../../enums/user';

const router = express.Router();

router.post(
  '/create-category',
  authGuard(ENUM_USER_ROLE.ADMIN),
  validateRequest(CategoryValidation.create),
  CategoryController.createCategory
);

router.get('/', CategoryController.getAllCategories);

router.get('/:id', CategoryController.getSingleCategory);

router.patch(
  '/:id',
  authGuard(ENUM_USER_ROLE.ADMIN),
  validateRequest(CategoryValidation.update),
  CategoryController.updateCategory
);
router.delete(
  '/:id',
  authGuard(ENUM_USER_ROLE.ADMIN),
  CategoryController.deleteCategory
);

export const CategoryRoutes = router;
