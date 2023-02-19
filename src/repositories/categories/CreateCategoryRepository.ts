import { Category } from '../../models/Category';

class CreateCategoryRepository {
  async execute(name: string) {
    return await Category.create({ name });
  }
}

const createCategoryRepository = new CreateCategoryRepository();

export { createCategoryRepository };
