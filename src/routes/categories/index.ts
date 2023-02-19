import { Router } from 'express';
import { createCategoryController } from '../../controllers/categories/CreateCategoryController';

const categoriesRoute = Router();

categoriesRoute.get('/categories');
categoriesRoute.post('/category/create', createCategoryController.execute);

export { categoriesRoute };
