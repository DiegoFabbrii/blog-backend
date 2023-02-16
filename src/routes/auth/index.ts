import { Router } from 'express';
import { createUserController } from '../../controllers/users/CreateUserController';

const authRoute = Router();

authRoute.post('/auth');
authRoute.post('/register', createUserController.create);

export { authRoute };
