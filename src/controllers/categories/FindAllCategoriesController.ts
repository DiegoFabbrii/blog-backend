import { Request, Response } from 'express';
import { findAllcategoriesService } from '../../services/categories/FindAllCategoriesService';

class FindAllCategoriesController {
  async execute(req: Request, res: Response) {
    try {
      const categories = await findAllcategoriesService.execute();
      return res.status(200).json(categories);
    } catch (error) {
      if (error instanceof Error)
        return res.status(500).json({ error: error.message });
    }
  }
}

const findAllCategoriesController = new FindAllCategoriesController();

export { findAllCategoriesController };
