import { Category } from '../../models/Category';

class FindCategoryRepository {
  async execute(name: string) {
    return await Category.findOne({ name });
  }
}

const findCategoryRepository = new FindCategoryRepository();

export { findCategoryRepository };
