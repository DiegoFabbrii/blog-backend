import { IUpdatedPost } from '../../interfaces/post/IUpdatedPost';
import { updatePostRepository } from '../../repositories/posts/UpdatePostRepository';

class UpdatePostService {
  async execute(updatedData: IUpdatedPost, id: string) {
    return await updatePostRepository.execute(updatedData, id);
  }
}

const updatePostService = new UpdatePostService();

export { updatePostService };
