import { Router } from 'express';
import { createCategoryController } from '../../controllers/categories/CreateCategoryController';
import { findAllCategoriesController } from '../../controllers/categories/FindAllCategoriesController';

const categoriesRoute = Router();

categoriesRoute.get('/categories', findAllCategoriesController.execute);
categoriesRoute.post('/category/create', createCategoryController.execute);

export { categoriesRoute };
