import { Category } from '../../models/Category';

class FindAllCategoriesRepository {
  async execute() {
    return await Category.find();
  }
}

const findAllCategoriesRepository = new FindAllCategoriesRepository();

export { findAllCategoriesRepository };
