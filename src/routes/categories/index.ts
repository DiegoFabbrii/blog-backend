import { Router } from 'express';

const categoriesRoute = Router();

categoriesRoute.get('/categories');
categoriesRoute.post('/category/create');

export { categoriesRoute };
