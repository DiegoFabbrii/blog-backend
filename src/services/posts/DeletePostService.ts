import { deletePostRepository } from '../../repositories/posts/DeletePostRepository';

class DeletePostService {
  async execute(id: string) {
    return await deletePostRepository.execute(id);
  }
}

const deletePostService = new DeletePostService();

export { deletePostService };
