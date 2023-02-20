import { createCategoryRepository } from '../../repositories/categories/CreateCategoryRepository';
import { findCategoryRepository } from '../../repositories/categories/FindCategoryRepository';

class CreateCategoryService {
  async execute(name: string) {
    const existedCategory = await findCategoryRepository.execute(
      name.toLowerCase()
    );

    if (existedCategory) throw new Error('Categoria informada já existe');

    return await createCategoryRepository.execute(name.toLowerCase());
  }
}

const createCategoryService = new CreateCategoryService();

export { createCategoryService };
