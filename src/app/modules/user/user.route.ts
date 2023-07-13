import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { UserController } from './user.controller';
import { UserValidation } from './user.validation';
const router = express.Router();

export const AuthRoute = router.post(
  '/signup',
  validateRequest(UserValidation.createUserZodSchema),
  UserController.createUser
);
router.get('/:id', auth(), UserController.getSingleUser);

router.get('/', auth(), UserController.getAllUsers);

export const UserRoutes = router;
