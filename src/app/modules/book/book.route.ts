import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BookController } from './book.controller';
import { BookValidation } from './book.validation';
const router = express.Router();

router.post(
  '/create',
  validateRequest(BookValidation.createBookZodSchema),
  BookController.createBook
);
// router.get('/:id', auth(), UserController.getSingleUser);

// router.get('/', auth(), UserController.getAllUsers);

export const BookRoutes = router;
