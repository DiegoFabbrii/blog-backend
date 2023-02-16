import { Router } from 'express';

const usersRoute = Router();

usersRoute.get('/user/:id');
usersRoute.patch('/user/update/:id');
usersRoute.delete('/user/delete/:id');

export { usersRoute };
