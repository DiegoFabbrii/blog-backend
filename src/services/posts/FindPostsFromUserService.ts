import { findPostFromUserRepository } from '../../repositories/posts/FindPostFromUserRepository';

class FindPostFromUserService {
  async execute(id: string) {
    return await findPostFromUserRepository.execute(id);
  }
}

const findPostFromUserService = new FindPostFromUserService();

export { findPostFromUserService };
