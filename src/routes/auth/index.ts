import { Router } from 'express';
import { authUserController } from '../../controllers/users/AuthUserController';
import { createUserController } from '../../controllers/users/CreateUserController';

const authRoute = Router();

authRoute.post('/auth', authUserController.execute);
authRoute.post('/register', createUserController.create);

export { authRoute };
