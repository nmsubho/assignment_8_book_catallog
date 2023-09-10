import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import authGuard from '../../middlewares/authGuard';
import validateRequest from '../../middlewares/validateRequest';
import { BookController } from './book.controller';
import { BookValidation } from './book.validations';

const router = express.Router();

router.get('/', BookController.getAllBooks);
router.get('/:categoryId/category', BookController.getBooksByCategoryId);

router.get('/:id', BookController.getSingleBook);

router.post(
  '/create-book',
  authGuard(ENUM_USER_ROLE.ADMIN),
  validateRequest(BookValidation.create),
  BookController.createBook
);

router.patch(
  '/:id',
  authGuard(ENUM_USER_ROLE.ADMIN),
  validateRequest(BookValidation.update),
  BookController.updateBook
);
router.delete(
  '/:id',
  authGuard(ENUM_USER_ROLE.ADMIN),
  BookController.deleteBook
);

export const BookRoutes = router;
