import { Router } from 'express';
import { updateUserController } from '../../controllers/users/UpdateUserController';
import { authMiddleware } from '../../middlewares/authMiddleware';

const usersRoute = Router();

usersRoute.get('/user/:id');
usersRoute.patch(
  '/user/update/:id',
  authMiddleware,
  updateUserController.execute
);
usersRoute.delete('/user/delete/:id');

export { usersRoute };
