import { Request, Response } from 'express';
import { createCategoryService } from '../../services/categories/CreateCategoryService';

class CreateCategoryController {
  async execute(req: Request, res: Response) {
    const { name } = req.body;
    try {
      await createCategoryService.execute(name);
      return res.status(201).json({ message: 'Categoria criada com sucesso' });
    } catch (error) {
      if (error instanceof Error)
        return res.status(500).json({ error: error.message });
    }
  }
}

const createCategoryController = new CreateCategoryController();

export { createCategoryController };
