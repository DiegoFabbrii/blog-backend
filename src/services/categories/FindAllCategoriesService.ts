import { findAllCategoriesRepository } from '../../repositories/categories/FindAllCategoriesRepository';

class FindAllCategoriesService {
  async execute() {
    return await findAllCategoriesRepository.execute();
  }
}

const findAllcategoriesService = new FindAllCategoriesService();

export { findAllcategoriesService };
