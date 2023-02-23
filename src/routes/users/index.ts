import { Router } from 'express';
import { deleteUserController } from '../../controllers/users/DeleteUser.Controller';
import { updateUserController } from '../../controllers/users/UpdateUserController';
import { authMiddleware } from '../../middlewares/authMiddleware';

const usersRoute = Router();

usersRoute.get('/user/:id');
usersRoute.patch(
  '/user/update/:id',
  authMiddleware,
  updateUserController.execute
);
usersRoute.delete(
  '/user/delete/:id',
  authMiddleware,
  deleteUserController.execute
);

export { usersRoute };
