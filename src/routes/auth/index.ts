import { Router } from 'express';

const authRoute = Router();

authRoute.post('/auth');
authRoute.post('/register');

export { authRoute };
