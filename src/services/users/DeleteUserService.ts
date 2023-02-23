import { deleteManyPostsRepository } from '../../repositories/posts/DeleteManyPostsRepository';
import { deleteUserRepository } from '../../repositories/users/DeleteUserRepository';

class DeleteUserService {
  async execute(id: string) {
    await deleteManyPostsRepository.execute(id);
    return await deleteUserRepository.execute(id);
  }
}

const deleteUserService = new DeleteUserService();

export { deleteUserService };
